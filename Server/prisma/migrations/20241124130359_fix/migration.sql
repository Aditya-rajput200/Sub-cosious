/*
  Warnings:

  - You are about to drop the column `contentId` on the `Link` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_contentId_fkey";

-- DropIndex
DROP INDEX "Link_contentId_key";

-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "link" TEXT;

-- AlterTable
ALTER TABLE "Link" DROP COLUMN "contentId";
