/**
 * Sanity GROQ queries for PBH Ecommerce project.
 */

import { defineQuery } from "next-sanity";

export const SALE_QUERY = defineQuery(
  `*[_type == "sales"] | order(name asc)`);