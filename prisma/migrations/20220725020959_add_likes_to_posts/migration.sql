/*
  Warnings:

  - You are about to drop the `likes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_post_id_fkey";

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "likes" INTEGER DEFAULT 0;

-- DropTable
DROP TABLE "likes";
