-- CreateTable
CREATE TABLE "brain" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "embedding" vector(768) NOT NULL,

    CONSTRAINT "brain_pkey" PRIMARY KEY ("id")
);
