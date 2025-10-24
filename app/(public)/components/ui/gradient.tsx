export function Gradient({ className }: { className?: string }) {
    return (
        <div className={`absolute z-0 rounded-full  ${className}`}>
            <img
                src="/radial_gradient.png"
                className="h-[400px] w-[400px] sm:w-[500px] sm:h-[500px] rounded-full  object-center object-cover mix-blend-overlay"
            />
        </div>
    );
}
