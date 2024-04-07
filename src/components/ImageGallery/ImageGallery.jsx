const ImageGallery = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
            <li key={index}>
                <div>
                    <img src={item.urls.small} alt={item.alt_description} />
                </div>
            </li>
            ))}
        </ul>
    )
}

export default ImageGallery;