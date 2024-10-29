import {NextResponse} from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(request ,{params}) {
    const id = parseInt(params.id)

    const mobil = await prisma.mobil.findUnique({
        where: {
            id
        }
    })
    return NextResponse.json(
        {
            message: "Data berhasil di dapatkan",
            data: mobil
        }
    )
}

export async function PATCH(request, {params}) {
    const id = parseInt(params.id)

    const {
        nama,
        merk,
        kursi,
        harga,
        bahan_bakar
    } = await request.json()

    const mobil = await prisma.mobil.update({
        where : {
            id
        },
        data : {
            nama: nama,
            merk: merk,
            kursi: kursi,
            harga: harga,
            bahan_bakar: bahan_bakar,
            updatedAt: new Date(),
        }
    })

    return NextResponse.json({
        message: "Data berhasil di edit",
        data: mobil
    })
}

export async function DELETE(request, {params}) {
    const id = parseInt(params.id)

    await prisma.mobil.delete({
        where : {
            id
        }
    })

    return NextResponse.json({
        message: "Data berhasil di hapus",
    })
}