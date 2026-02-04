interface props {
  label: string;
}
const LinkLabel = ({ label }: props) => {
  return <span className="text-xl sm:hidden md:inline-block">{label}</span>;
};
export default LinkLabel;
