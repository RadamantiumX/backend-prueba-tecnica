-- CreateTable
CREATE TABLE "Form" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profesion" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "pais" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);
