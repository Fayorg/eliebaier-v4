export function HoverEffect({ children }: { children: React.ReactNode }) {
	return <div className="hover:scale-110 hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all duration-200 opacity-80 hover:opacity-100">{children}</div>;
}
