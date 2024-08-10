import { relations } from "drizzle-orm";
import {
  boolean,
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  foreignKey,
  serial,
} from "drizzle-orm/pg-core";
import type { AdapterAccountType } from "next-auth/adapters";

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.identifier, verificationToken.token],
    }),
  })
);

export const authenticators = pgTable(
  "authenticator",
  {
    credentialID: text("credentialID").notNull().unique(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: boolean("credentialBackedUp").notNull(),
    transports: text("transports"),
  },
  (authenticator) => ({
    compositePK: primaryKey({
      columns: [authenticator.userId, authenticator.credentialID],
    }),
  })
);

export const recipes = pgTable("recipe", {
  recipeID: serial("recipeID")
    .primaryKey(),
  recipeName: text("recipeName").notNull(),
  recipeDescription: text("recipeDescription").notNull(),
  recipeImage: text("recipeImage").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => users.id),
});

export const ingredients = pgTable("ingredient", {
  ingredientID: serial("ingredientID")
    .primaryKey(),
  ingredientName: text("ingredientName").notNull(),
});

// Many to Many relationship between recipes and ingredients
export const recipeToIngredients = pgTable(
  "recipe_to_ingredients",
  {
    recipeId: integer("recipe_id").notNull(),
    ingredientId: integer("ingredient_id").notNull(),
    quantity: integer("quantity").notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.recipeId, table.ingredientId] }),
    recipeReference: foreignKey({
      columns: [table.recipeId],
      foreignColumns: [recipes.recipeID],
    }),
    ingredientReference: foreignKey({
      columns: [table.ingredientId],
      foreignColumns: [ingredients.ingredientID],
    }),
  })
);

export const recipesRelations = relations(recipes, ({ many }) => ({
  recipeToIngredients: many(recipeToIngredients),
}));

export const ingredientsRelations = relations(ingredients, ({ many }) => ({
  recipeToIngredients: many(recipeToIngredients),
}));

export const recipeToIngredientsRelations = relations(
  recipeToIngredients,
  ({ one }) => ({
    recipe: one(recipes, {
      fields: [recipeToIngredients.recipeId],
      references: [recipes.recipeID],
    }),
    ingredient: one(ingredients, {
      fields: [recipeToIngredients.ingredientId],
      references: [ingredients.ingredientID],
    }),
  })
);
