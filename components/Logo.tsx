import { Text } from "@chakra-ui/react";

export const Logo = (props: any) => {
    return (
        <Text
            as="span"
            fontWeight="bold"
            fontSize={{ base: "lg", md: "xl" }}
            letterSpacing="-0.03em"
            color="blackAlpha.800"
            {...props}
        >
            BORKOWSKI
        </Text>
    );
};
