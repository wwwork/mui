import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const data = [
  {
    id: 1,
    first_name: "Dwayne",
    last_name: "Leeb",
    email: "dleeb0@delicious.com",
    gender: "Non-binary",
    ip_address: "97.73.70.188",
  },
  {
    id: 2,
    first_name: "Helaina",
    last_name: "Davidove",
    email: "hdavidove1@ovh.net",
    gender: "Female",
    ip_address: "27.214.14.177",
  },
  {
    id: 3,
    first_name: "Cthrine",
    last_name: "MacUchadair",
    email: "cmacuchadair2@tinyurl.com",
    gender: "Female",
    ip_address: "46.203.76.43",
  },
  {
    id: 4,
    first_name: "Georgie",
    last_name: "Sizzey",
    email: "gsizzey3@reference.com",
    gender: "Male",
    ip_address: "140.201.196.227",
  },
  {
    id: 5,
    first_name: "Bell",
    last_name: "Shillan",
    email: "bshillan4@webeden.co.uk",
    gender: "Female",
    ip_address: "221.168.44.28",
  },
  {
    id: 6,
    first_name: "Enriqueta",
    last_name: "Chettle",
    email: "echettle5@sciencedaily.com",
    gender: "Female",
    ip_address: "24.115.31.2",
  },
  {
    id: 7,
    first_name: "Stevie",
    last_name: "Dumini",
    email: "sdumini6@t.co",
    gender: "Male",
    ip_address: "145.52.250.212",
  },
  {
    id: 8,
    first_name: "Nelle",
    last_name: "Kocher",
    email: "nkocher7@bandcamp.com",
    gender: "Female",
    ip_address: "111.215.90.145",
  },
  {
    id: 9,
    first_name: "Elenore",
    last_name: "Benley",
    email: "ebenley8@last.fm",
    gender: "Female",
    ip_address: "167.94.73.202",
  },
  {
    id: 10,
    first_name: "Davie",
    last_name: "Clitherow",
    email: "dclitherow9@reference.com",
    gender: "Agender",
    ip_address: "73.146.211.118",
  },
];

export default function TableDemo() {
  return (
    <TableContainer component={Paper} sx={{ height: "300px" }}>
      <Table aria-aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>nama</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>email</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&: last-chile td, &: last-child th": { border: 0 } }}
            >
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.first_name}</TableCell>
              <TableCell>{item.last_name}</TableCell>
              <TableCell>{item.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
