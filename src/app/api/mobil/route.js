import {NextResponse} from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
    const mobil = await prisma.mobil.findMany()

    return NextResponse.json(
        {
            message: "Daftar data berhasil di tampilkan",
            data: mobil
        }
    )
}

export async function POST(request) {
    const {
        nama,
        merk,
        kursi,
        harga,
        bahan_bakar
    } = await request.json()

    const mobil = await prisma.mobil.create({
        data: {
            nama: nama,
            merk: merk,
            kursi: kursi,
            harga: harga,
            bahan_bakar: bahan_bakar,
        }
    })

    return NextResponse.json(
        {
            message: "Data mobil berhasil dibuat",
            data: mobil
        }
    )
}