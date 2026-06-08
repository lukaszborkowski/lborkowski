"use client";

// Landing.tsx
import {
    Box,
    Button,
    Container,
    Divider,
    Heading,
    HStack,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Tag,
    TagLabel,
    Text,
    VStack
} from "@chakra-ui/react";
import { mdiArrowRight, mdiEye, mdiInvoiceTextOutline, mdiLinkedin, mdiPhone } from "@mdi/js";
import * as React from "react";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";

/** Helper do ikon z internetu */
const IconImg = ({
    src,
    label,
    boxSize = 5,
}: {
    src: string;
    label?: string;
    boxSize?: number | string;
}) => (
    <Box
        as="img"
        src={src}
        alt={label || "icon"}
        boxSize={boxSize}
        display="inline-block"
        verticalAlign="middle"
        ml={1}
    />
);

/** Ikony UI (lucide przez Iconify) */
const icons = {
    arrowRight: "https://api.iconify.design/lucide:arrow-right.svg",
    external: "https://api.iconify.design/lucide:external-link.svg",
    mail: "https://api.iconify.design/lucide:mail.svg",
    phone: "https://api.iconify.design/lucide:phone.svg",
    github: "https://api.iconify.design/lucide:github.svg",
};

/** Ikony technologii (Simple Icons CDN) — można zmieniać kolory przez /HEX na końcu */
const techIcon = (name: string, hex?: string) =>
    `https://cdn.simpleicons.org/${name}${hex ? `/${hex}` : ""}`;

type Project = {
    id: string;
    title: string;
    date?: string;
    duration?: string;
    difficulty?: "Easy" | "Medium" | "Hard";
    technologies: string[];
    description: string;
    demoUrl?: string;
    githubUrl?: string;
    status?: string;
    image?: string;
    ownership?: string;
};

const PROJECTS: Project[] = [
    {
        id: "11",
        title: "NutriLaunch",
        duration: "8 months",
        technologies: [
            "React",
            "Next.js",
            "React Native",
            "Expo",
            "NestJS",
            "MongoDB",
            "Chakra UI",
            "Docker",
            "AWS",
            "Stripe"
        ],
        description:
            "NutriLaunch is an all-in-one platform that helps entrepreneurs, dietitians, and fitness coaches launch profitable nutrition and fitness businesses in minutes. It provides ready-to-use apps, admin tools, automated plan generation, and built-in payments — enabling creators to turn their health expertise into scalable digital products.",
        demoUrl: "https://nutrilaunch.app",
        image:
            "https://s3.us-east-005.backblazeb2.com/blackalpha/originOrg/3915f12bff7cb3f494a5ca916c52c465e24c7cb6489cd60fee499f27f4450db0.webp"
    }
    ,
    {
        id: "1",
        title: "MeShape",
        duration: "12 months",
        technologies: ["React", "React Native", "Expo", "Nest.js", "MongoDB", "Chakra UI", "Docker", "AWS", "Stripe"],
        description:
            "MeShape is a digital platform for personalized diet generation, with a mobile app for users, a CMS panel for content management, and backend services that create tailored meal plans based on user data and preferences.",
        demoUrl: "https://meshape.app",
        ownership:
            "The project was developed at CodeWell and is the property of the company.",

        image:
            "https://s3.us-east-005.backblazeb2.com/blackalpha/originOrg/846c4b64de8e0d0c738136abc7d6f8287b70bd5c9d2a26fa70440e091778319f.webp",
    },
    {
        id: "2",
        title: "50 Shades Of ADHD",
        duration: "3 months",
        technologies: ["Next.js", "NestJS", "Firebase", "Tailwind CSS"],
        description:
            "50 Shades of ADHD is an engaging quiz designed for people with ADHD, helping them explore different traits, habits, and challenges through 50 light-hearted yet insightful questions, offering a mix of self-reflection, awareness, and fun.",
        demoUrl: "https://50shadesofadhd.com",
        status: "IN PROGRESS",
        image:
            "https://s3.us-east-005.backblazeb2.com/blackalpha/originOrg/c433f1cfe359d18970ee1992345478c083ac85cadda6028f05d540599319e691.webp",
    },
    {
        id: "3",
        title: "KetoVibe",
        duration: "4 months",
        date: "January 2022",
        technologies: ["React", "Next.js", "Chakra UI", "Firebase"],
        description:
            "KetoVibe is an advanced platform for personalized nutrition, combining a mobile app, expert knowledge, and AI-driven recommendations. It collects and analyzes data from users — including health metrics, goals, and preferences — to generate tailored diet and training plans, while providing continuous tracking, progress insights, and integration with scientific research.",
        demoUrl: "https://ketovibe.world",
        status: "IN PROGRESS",
        image:
            "https://s3.us-east-005.backblazeb2.com/blackalpha/originOrg/8549ec9de0fe4382168e03809c4f3f55c423c48325052d2614ec0fd363d04c7a.webp",
    },
    {
        id: "4",
        title: "Tripolis",
        duration: "16 months",
        date: "January 2021",
        technologies: ["React", "Next.js", "Chakra UI", "PostgresSQL"],
        description:
            "Tripolis is a digital platform supporting small and medium-sized businesses in the Gdańsk–Gdynia–Sopot metropolitan area. It centralizes access to business support services, office and conference spaces, events, and development resources provided by multiple partner institutions.",

        demoUrl: "https://tri-polis.pl",
        // status: "COMPLETED",
        image:
            "https://s3.us-east-005.backblazeb2.com/blackalpha/originOrg/71b14e712007f1985958df3d9f47a5d3f1e7f01888fd32d151642e8899ffdeb7.webp",
    },
];

const Nav = () => {

    return (

        <Box
            as="nav"
            position="sticky"
            top={0}
            zIndex={10}
            bg="white"
            borderBottom="1px solid"
            borderColor="gray.200"
            py={{
                base: 2,
                md: 0,
            }}
        >
            <Container maxW="6xl" py={3}>
                <HStack justify={{
                    base: "center",
                    md: "space-between",
                }}>
                    <Logo
                        maxW={{
                            base: "140px",
                            md: "150px",
                        }}
                    />
                    <HStack spacing={6} fontWeight="semibold"
                        display={{ base: "none", md: "flex" }}
                        color="blackAlpha.700"
                        fontSize={{
                            base: "sm",
                            md: "sm",
                        }}
                    >
                        <Link href="#home">Home</Link>
                        <Link href="#about">About</Link>
                        <Link href="#projects">Projects</Link>
                        <Link href="#contact">Contact</Link>
                    </HStack>

                    {/* <IconButton
                        aria-label="Toggle navigation"
                        icon={<AwesomeHamburgerButton
                            borderRadius="full"
                            border="1px solid"
                            borderColor="gray.300"
                            bg="white"
                        />}
                        display={{ base: "flex", md: "none" }}
                        variant="ghost"
                        onClick={() => {
                            const navLinks = document.querySelector("nav > div > hstack");
                            if (navLinks) {
                                navLinks.classList.toggle("hidden");
                            }
                        }}
                    /> */}
                </HStack>
            </Container>
        </Box>
    );
}

const Hero = () => (
    <Box id="home" pt={{ base: 12, md: 24 }} pb={{ base: 12, md: 44 }}>
        <Container maxW="6xl">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center"
                textAlign={{
                    base: "center",
                    md: "left",
                }}
            >
                <Stack spacing={6}>
                    <Heading as="h1" fontSize={{
                        base: "32px",
                        md: "50px",
                    }} letterSpacing="-0.04em">
                        👋 Hi, I’m<br /> Łukasz Borkowski, <br />
                        <Text as="span" color="blackAlpha.600">Full Stack Dev</Text> and <br />
                        <Text as="span" color="blackAlpha.600">UX/UI Designer.</Text>
                    </Heading>

                    <Text
                        fontSize={{
                            base: "md",
                            md: "lg",
                        }}
                        color="blackAlpha.700"
                    >
                        I build <b>modern</b> applications from <b>start to finish</b> <br />
                        From <b>idea</b> to <b>deployment</b>, everything is <b>in my hands</b>.
                    </Text>
                    <HStack spacing={4}
                        maxW="480px"
                    >
                        <Button w={{
                            base: "100%",
                            md: "auto",
                        }}
                            flex={1}
                            as="a" href="#projects" size="lg" bg="white" color="blackAlpha.700" colorScheme="blackAlpha" borderRadius={"full"} variant="outline" rightIcon={<Icon path={mdiArrowRight} />}>
                            Portfolio
                        </Button>
                        <Button w={{
                            base: "100%",
                            md: "auto",
                        }}
                            flex={1}

                            as="a" href="#contact" size="lg" bg="white" color="blackAlpha.700" colorScheme="blackAlpha" borderRadius={"full"} variant="outline" rightIcon={<Icon path={mdiPhone} />}>
                            Contact
                        </Button>
                    </HStack>

                    {/* Technologie / stack */}
                    <HStack spacing={2} flexWrap="wrap" pt={2}
                        justify={{
                            base: "center",
                            md: "flex-start",
                        }}
                    >
                        {[
                            { id: "react", hex: "61DAFB", label: "React" },
                            { id: "react-native", iconName: "react", hex: "orange", label: "React Native" },
                            { id: "nextdotjs", hex: "000000", label: "Next.js" },
                            { id: "nestjs", hex: "E0234E", label: "NestJS" },
                            { id: "django", hex: "092E20", label: "Django" },
                            { id: "typescript", hex: "3178C6", label: "TypeScript" },
                            { id: "nodedotjs", hex: "339933", label: "Node.js" },
                            { id: "mongodb", hex: "47A248", label: "MongoDB" },
                            { id: "postgresql", hex: "4169E1", label: "PostgreSQL" },
                            { id: "expo", hex: "111111", label: "Expo" },
                            { id: "docker", hex: "2496ED", label: "Docker" },
                            { id: "git", hex: "F05032", label: "Git" },
                            { id: "figma", hex: "F24E1E", label: "Figma" },
                            { id: "sketch", hex: "F7B500", label: "Sketch" },
                            { id: "framer", hex: "0055FF", label: "Framer" },
                            { id: "tailwindcss", hex: "06B6D4", label: "Tailwind CSS" },
                            { id: "chakraui", hex: "319795", label: "Chakra UI" },
                            { id: "styledcomponents", hex: "DB7093", label: "styled-components" },
                            { id: "storybook", hex: "FF4785", label: "Storybook" },
                            { id: "gsap", hex: "88CE02", label: "GSAP" },
                            { id: "webflow", hex: "4353FF", label: "Webflow" },
                        ].map((t) => (
                            <Tag key={t.id} variant="subtle" bg="blackAlpha.100">
                                <HStack spacing={2}>
                                    <IconImg src={techIcon(t?.iconName || t.id, t.hex)} boxSize={4} label={t.label} />
                                    <TagLabel fontSize="2xs" letterSpacing="wide" color="blackAlpha.600">{t.label}</TagLabel>
                                </HStack>
                            </Tag>
                        ))}
                    </HStack>
                </Stack>

                <Box>
                    <Image
                        alt="Developer at multi-monitor desk"
                        src="https://s3.us-east-005.backblazeb2.com/blackalpha/originOrg/5d5bc9e1bede615396d4654bb3003f6c63f5ed7b1274b1d72312b008d44f1d79.webp"
                    />
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
);

const About = () => (
    <Box id="about" py={{ base: 16, md: 24 }}>
        <Container maxW="6xl">
            <Stack flexDirection={{
                base: "column-reverse",
                md: "row",
            }}
                spacing={10}
                alignItems="center"
                justify={"center"}
            >
                <Box>
                    <Image
                        alt="About illustration"
                        src="https://s3.us-east-005.backblazeb2.com/blackalpha/originOrg/de6482c25e032cd0f27f143f1fc5f3502a1a4d45a1ed9528df9bada9aefcc82e.webp"
                        maxH={{
                            base: 300,
                            md: "500px",
                        }}
                    />
                </Box>
                <Stack spacing={5}
                    textAlign={{
                        base: "center",
                        md: "left",
                    }}
                    align={{
                        base: "center",
                        md: "flex-start",
                    }}
                    pl={{
                        base: 0,
                        md: 24,
                    }}
                >
                    <Heading size="xl">About</Heading>
                    <VStack
                        fontSize={{
                            base: "md",
                            md: "lg",
                        }}
                        align={{
                            base: "center",
                            md: "flex-start",
                        }}
                        spacing={{
                            base: 4,
                            md: 6,
                        }}
                        textAlign={{
                            base: "center",
                            md: "left",
                        }}
                    >
                        <VStack
                            align={"inherit"}
                            spacing={0}

                        >
                            <Box as="b" fontSize="md" textDecor={"underline"}>
                                Education:
                            </Box>
                            <Box>
                                Politechnika Warszawska (Informatyka)
                            </Box>
                        </VStack>

                        <VStack
                            align={"inherit"}
                            spacing={0}
                        >
                            <Box as="b" fontSize="md" textDecor={"underline"}>
                                Experience:
                            </Box>
                            <Box>
                                9+ years in the IT industry as a Full Stack Developer <br /> and UX/UI Designer
                            </Box>
                        </VStack>

                        <VStack
                            align={"inherit"}
                            spacing={0}
                        >
                            <Box as="b" fontSize="md" textDecor={"underline"}>
                                Location:
                            </Box>
                            <Box>
                                Warsaw, Poland 🇵🇱
                            </Box>
                        </VStack>
                    </VStack>

                    {/* <Text fontSize="lg" color="gray.600">
                        Łączę Frontend i Backend: React/Next.js oraz NestJS/Django.
                        Stawiam na czytelny kod, wydajność i świetne UX.
                    </Text> */}

                </Stack>
            </Stack>
        </Container>
    </Box>
);

const ProjectCard: React.FC<{ p: Project; index: number }> = ({ p, index }) => (
    <Box
        rounded="2xl"
        bg="white"
        shadow="sm"
        border="1px solid"
        borderColor="gray.200"
        overflow="hidden"
    >
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={0}>
            <Box
                p={{
                    base: 4,
                }}
            >
                <Image alt={p.title} src={p.image} objectFit="cover" w="100%" h="100%" maxH={{ base: 220, md: "300px" }} rounded={"xl"} />
            </Box>
            <Stack p={{ base: 5, md: 8 }} spacing={4}
            pt={{
                base: 0,
                md: 8,
            }}
            >

                <HStack
                    justify={"space-between"}
                    align={{
                        base: "flex-start",
                        // md: "center",
                    }}
                    flexDir={{
                        base: "column",
                        md: "row",
                    }}
                >
                    <Heading size="lg">

                        {p.title}

                    </Heading>
                    {p.status && (
                        <Tag size="sm" colorScheme="cyan" borderRadius="full">
                            <TagLabel>{p.status}</TagLabel>
                        </Tag>
                    )}
                </HStack>
                <HStack spacing={2} color="gray.500" fontSize="sm" flexWrap="wrap">
                    <Text><Text as="span" color="gray.700" fontWeight="semibold">Duration:</Text> {p.duration}</Text>

                    {/* <Text><Text as="span" color="gray.700" fontWeight="semibold">Difficulty</Text> {p.difficulty}</Text> */}
                    <br />
                    <Text>
                        <Text as="span" color="gray.700" fontWeight="semibold">Technologies:</Text>{" "}
                        {p.technologies.join(", ")}
                    </Text>
                </HStack>

                <Text color="gray.600" fontSize={["xs", "sm"]}>{p.description}</Text>
                {p.ownership && <Text color="gray.500" fontSize="xs">{p.ownership}</Text>}


                <HStack pt={2} spacing={3} flexWrap="wrap">
                    {p.demoUrl && (
                        <Button
                            as={Link}
                            href={p.demoUrl}
                            isExternal
                            variant={"outline"}
                            borderRadius={"full"}
                            w="full"
                            rightIcon={<Icon path={mdiEye} />}
                        >
                            LIVE
                        </Button>
                    )}

                </HStack>
            </Stack>
        </SimpleGrid>
    </Box>
);

const Projects = () => (
    <Box id="projects" py={{ base: 16, md: 24 }}>
        <Container maxW="6xl">
            <Stack spacing={8}

            >
                <Heading size="xl"
                    textAlign={{
                        base: "center",
                        md: "left",
                    }}
                >Last Projects</Heading>
                <Stack spacing={{
                    base: 6,
                    md: 8,
                }}>
                    {PROJECTS.map((p, i) => (
                        <ProjectCard key={p.id} p={p} index={i} />
                    ))}
                </Stack>
            </Stack>
        </Container>
    </Box>
);

const Contact = () => (
    <Box id="contact" py={{ base: 16, md: 24 }}>
        <Container maxW="6xl">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
                <HStack
                    justify={{
                        base: "center",
                        md: "flex-end",
                    }}

                >
                    <Stack spacing={6}
                        align={{
                            base: "center",
                            md: "flex-start",
                        }}
                    >
                        <Heading size="xl">Contact</Heading>

                        <Stack spacing={4}

                            align={{
                                base: "center",
                                md: "flex-start",
                            }}>
                            <HStack>
                                <IconImg src={icons.mail} />
                                <Link href="mailto:lukasz.borkowski1998@gmail.com">lukasz.borkowski1998@gmail.com</Link>
                            </HStack>
                            <HStack>
                                <Icon path={mdiLinkedin} size={6} />
                                <Link href="https://www.linkedin.com/in/lborkowski98/" isExternal>lborkowski98</Link>
                            </HStack>
                            <HStack>
                                <IconImg src={icons.phone} />
                                <Text>791 601 198</Text>
                            </HStack>
                            <HStack>
                                <Icon path={mdiInvoiceTextOutline} size={6} />
                                <Text>NIP: 7591753774</Text>
                            </HStack>

                        </Stack>
                    </Stack>
                </HStack>


                <Box
                    mx="auto"
                >
                    <Image
                        alt="Contact illustration"
                        w={{
                            base: "100px",
                            md: "80%",
                        }}
                        src="https://s3.us-east-005.backblazeb2.com/blackalpha/originOrg/d88e39b10bc43b48761415fc3a8c29a8988ff61508e2b6b33751c393976d380f.webp"
                    />
                </Box>
            </SimpleGrid>

            <Divider my={12} />
            <Text fontSize="sm" color="gray.500" textAlign="center">
                © {new Date().getFullYear()} BORKOWSKI
            </Text>
        </Container>
    </Box>
);

export function Landing() {
    return (
        <Box
            bg="blackAlpha.50"
        >
            <Nav />
            <Box
                px={{
                    base: 0,
                    md: 8,
                }}
            >
                <Hero />
                <About />
                <Projects />
                <Contact />
            </Box>

        </Box>
    );
}
