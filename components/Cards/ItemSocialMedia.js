function ItemSocialMedia(props) {
  const { name, url, iconName } = props.content;
  return (
    <li id="item-sm">
      <a className="name-social" href={url} target="_blank">
        <span
          className="iconify"
          data-icon={"mdi-" + iconName}
          data-inline="false"
        ></span>
      </a>
    </li>
  );
}
export default ItemSocialMedia;
//
//despues del span
//<code translate="no">{name}</code>