import { motion, useAnimation } from "framer-motion";
import { RiSearchLine } from "react-icons/ri";
import Button from "../utils/Button";

function SearchBar() {
  const formControls = useAnimation();
  const setFormMaxWidth = (width) => {
    formControls.start({ maxWidth: width });
  };
  return (
    <motion.form
      className="search-bar"
      initial={{ maxWidth: 400 }}
      animate={formControls}
    >
      <input
        type="text"
        placeholder="Recherchez votre bien..."
        onFocus={() => setFormMaxWidth(700)}
        onBlur={() => setFormMaxWidth(400)}
      />
      <Button type="submit" title="Search">
        <RiSearchLine />
      </Button>
    </motion.form>
  );
}

export default SearchBar;
