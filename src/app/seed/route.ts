import { db } from "@vercel/postgres";
import { chores } from "@/app/lib/placeholder-data";

const client = await db.connect();

async function seedChores() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS chores (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      is_complete BOOLEAN NOT NULL,
      created_date DATE NOT NULL
    );
  `;

  const insertedChores = await Promise.all(
    chores.map(
      (chore) => client.sql`
        INSERT INTO chores (id, name, is_complete, created_date)
        VALUES (${chore.id}, ${chore.name}, ${chore.is_complete}, ${chore.created_date})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedChores;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedChores();
    await client.sql`COMMIT`;
    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
