import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const students = [
  {
    nim: "10119172",
    nama: "Rahman Insani",
    alamat: "Bandung",
    institusi: "Universitas Komputer Indonesia",
  },
  {
    nim: "10119025",
    nama: "Adhira Fahri Gathan",
    alamat: "Bandung",
    institusi: "Universitas Komputer Indonesia",
  },
  {
    nim: "10119116",
    nama: "Fakhri Adi Saputra",
    alamat: "Bandung",
    institusi: "Universitas Komputer Indonesia",
  },
  {
    nim: "10119029",
    nama: "Adrian Maidiyangsa",
    alamat: "Bandung",
    institusi: "Universitas Komputer Indonesia",
  },
]

const MahasiswaPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-16">
      <h1 className="mb-16 text-4xl font-bold">Daftar Mahasiswa</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nomor</TableHead>
            <TableHead>NIM</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Alamat</TableHead>
            <TableHead>Institusi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{student.nim}</TableCell>
              <TableCell>{student.nama}</TableCell>
              <TableCell>{student.alamat}</TableCell>
              <TableCell>{student.institusi}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default MahasiswaPage
