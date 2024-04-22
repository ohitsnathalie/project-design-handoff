export const ValuePieces = ({image, alt, heading, valueContent, readMore})=> {
    return (
        <div>
            <img src={image} alt={alt} />
            <div>
                <h5>{heading}</h5>
                <p>{valueContent}</p>
            </div>
            <p>{readMore}</p>
        </div>
    )
}