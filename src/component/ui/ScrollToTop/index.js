import { useEffect, useState } from "react";
import debounce from 'utils/debounce';
import { COLORS } from 'styles/constants';

const styles={
  container: {
		cursor: "pointer",
    position: "fixed",
    bottom: "4px",
    right: "5px",
    width: "40px",
    height: "40px",
    backgroundColor: COLORS.primary,
		color: COLORS.text_contrast,
    zIndex: "9999",
		fontSize: "30px",
    fontWeight: "bold",
    justifyContent: "center",
		lineHeight: "initial",
		transform: "translate3d(0,0,0)",
    "-webkit-transform": "translate3d(0,0,0)",
    "-moz-transform": "translate3d(0,0,0)",
    "-ms-transform": "translate3d(0,0,0)",
    "-o-transform": "translate3d(0,0,0)"
	}
}

const ScrollToTop = function() {
	const [showScroll, setShowScroll] = useState(false)

 	useEffect(() => {
    window.addEventListener('scroll', debounce(checkScrollTop, 300));
    return () => window.removeEventListener('scroll', debounce(checkScrollTop, 300));
  }, []);

	const checkScrollTop = () => {    
		if (!showScroll && window.pageYOffset > 400){
				setShowScroll(true)    
		} else if (showScroll && window.pageYOffset <= 400){
				setShowScroll(false)    
		}  
	};

	const scrollTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}
  
	return (
		<div onClick={scrollTop} style={{...styles.container, display: showScroll ? 'flex' : 'none'}}>
			&uarr;
		</div>
	);
}
export default ScrollToTop