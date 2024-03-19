interface ResponseErrorDisplayProps {
    errorType: string;
}

const ResponseErrorDisplay = ({ errorType }: ResponseErrorDisplayProps) => {
    if (!errorType) {
        return;
    }
    
    return (
        <div>
            <span className="text-xl">Something went wrong...</span>
            <span>{errorType}</span>
        </div>
    )
}

export default ResponseErrorDisplay;

