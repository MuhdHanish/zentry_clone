type ButtonProps = {
    id: string;
    title: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    containerClass?: string;
}

export const Button = ({
    id,
    title,
    leftIcon,
    rightIcon,
    containerClass
}: ButtonProps) => {
    return (
        <button
            id={id}
            className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass || ''}`}
        >

            {leftIcon && leftIcon}
            <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                {title}
            </span>
            {rightIcon && rightIcon}
        </button>
    )
}
