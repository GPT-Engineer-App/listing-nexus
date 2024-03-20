import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Grid, Image, Link } from "@chakra-ui/react";
import { FaSearch, FaMapMarkerAlt, FaPhone, FaGlobe } from "react-icons/fa";

const businesses = [
  {
    id: 1,
    name: "Acme Inc.",
    description: "Leading manufacturer of innovative products.",
    image: "https://images.unsplash.com/photo-1496851473196-e26508c21494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwYnVpbGRpbmd8ZW58MHx8fHwxNzEwOTU5MTY4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    address: "123 Main St, Anytown, USA",
    phone: "(123) 456-7890",
    website: "https://www.acmeinc.com",
  },
  {
    id: 2,
    name: "Global Corp.",
    description: "Providing top-notch services worldwide.",
    image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3MTA5NTkxNjl8MA&ixlib=rb-4.0.3&q=80&w=1080",
    address: "456 Elm St, Anycity, USA",
    phone: "(987) 654-3210",
    website: "https://www.globalcorp.com",
  },
  // Add more businesses here...
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBusinesses = businesses.filter((business) => business.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box maxWidth="800px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" marginBottom={4}>
        Business Listings
      </Heading>
      <Box display="flex" alignItems="center" marginBottom={8}>
        <Input placeholder="Search businesses..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} marginRight={4} />
        <Button leftIcon={<FaSearch />}>Search</Button>
      </Box>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={8}>
        {filteredBusinesses.map((business) => (
          <Box key={business.id} borderWidth={1} borderRadius="lg" padding={4}>
            <Image src={business.image} alt={business.name} borderRadius="lg" marginBottom={4} />
            <Heading as="h2" size="md" marginBottom={2}>
              {business.name}
            </Heading>
            <Text fontSize="sm" marginBottom={4}>
              {business.description}
            </Text>
            <Box display="flex" alignItems="center" marginBottom={2}>
              <FaMapMarkerAlt />
              <Text marginLeft={2}>{business.address}</Text>
            </Box>
            <Box display="flex" alignItems="center" marginBottom={2}>
              <FaPhone />
              <Text marginLeft={2}>{business.phone}</Text>
            </Box>
            <Box display="flex" alignItems="center">
              <FaGlobe />
              <Link href={business.website} marginLeft={2} isExternal>
                {business.website}
              </Link>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
