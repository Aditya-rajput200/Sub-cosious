-- DropForeignKey
ALTER TABLE "Tags" DROP CONSTRAINT "Tags_contentId_fkey";

-- AlterTable
ALTER TABLE "Tags" ALTER COLUMN "contentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE SET NULL ON UPDATE CASCADE;
