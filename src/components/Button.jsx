
const Button = ( {text, className, id} ) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById('work');
    if(target) {
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
    }
  };

  return (
   <a 
   id={id}
   href="#work"
   onClick={handleClick}
   className={`${className ?? ''} cta-wrapper`} >
    <div className="cta-button group">
        <div className="bg-circle"/>
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
            <img src="/public/images/arrow-down.svg" alt="arrow" />
        </div>
    </div>

   </a>
  )
}

export default Button
