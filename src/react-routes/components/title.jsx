import { useEffect } from "react";
import PropTypes from 'prop-types'
export default function Title({title}) {
  useEffect(() => {
    document.title = title
    return () => {

    };
  }, [title]);
  return(
    <h1>{title}</h1>
  )
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
};