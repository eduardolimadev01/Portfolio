type ButtonProps = {
	label: string
	color: string
	onClick: () => void
	disabled?: boolean
	className?: string
}

export const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	color = "bg-blue-500 ",
	disabled = false,
	className = ""
}) => {
	const styleButton =
		"px-4 py-2 rounded text-white hover:opacity-90 disabled:bg-gray-400 disabled:cursor-not-allowed"
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${styleButton} ${className} ${color}`}
		>
			{label}
		</button>
	)
}

