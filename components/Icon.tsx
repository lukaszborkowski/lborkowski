import { Icon as CIcon, IconProps } from "@chakra-ui/react";

interface IProps extends IconProps {
    path: string;
    size?: number | string;
}

const Icon = ({ path, size = 5, ...restProps }: IProps) => {
    return (
        <CIcon viewBox="0 0 24 24" w={size} h={size} {...restProps}>
            <path d={path} fill="currentColor" />
        </CIcon>
    );
};

export { Icon };
