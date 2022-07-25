/*
  Warnings:

  - You are about to drop the `followers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "followers" DROP CONSTRAINT "followers_user_id_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "followers" INTEGER[];

-- DropTable
DROP TABLE "followers";
