import { db } from '../../db'

export async function get(event) {
  const pegawai = await db.pegawai.create({
    data: {
      nama: 'admin zero',
      nip: '0987654321',
      nik: '0987654321',
      avatar: 'https://picsum.photos/id/1037/200',
      user: {
        create: {
          username: 'adminzero',
          password: 'adminzero',
          isSuperAdmin: true
        }
      },
      unitKerja: {
        create: {
          nama: 'First Unit Kerja',
          alamat: 'Jl. Adisucipto, Penfui',
          avatar: 'https://picsum.photos/id/1037/200'
        }
      }
    }
  })
  return {
    status: 303,
    headers: {
      location: '/auth/signin'
    }
  }
}
