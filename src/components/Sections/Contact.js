import React from 'react'

function Contact() {
    return (
        <section id="contact" className="section scrollspy full-height">
            <h3 className="page-title white-text teal">Contact</h3>
            <div className="container">
              <p>
                <a href="mailto:cesaguma@hotmail.com" rel="noreferrer" data-position="top" data-tooltip="Email Cesar" className="btn-floating btn-large waves-effect waves-light blue tooltipped" target="_blank"><i className="fa fa-envelope"></i></a><a href="mailto:cesaguma@hotmail.com" className="hoverline" rel="noreferrer" target="_blank">cesaguma@hotmail.com</a>
              </p>
              <p>
                <a href="https://github.com/CesarAugustoMartinez" rel="noreferrer" target="_blank" data-position="top" data-tooltip="View Cesar on GitHub" className="btn-floating btn-large waves-effect waves-light blue tooltipped"><i className="fa fa-github"></i></a><a aria-label="Cesar on Github" href="https://github.com/CesarAugustoMartinez" className="hoverline" rel="noreferrer" target="_blank">github.com/CesarAugustoMartinez</a>
              </p>
              <p>
                <a  href="https://linkedin.com/in/cesar-augusto-martinez-auquilla-03934a16b" rel="noreferrer" target="_blank" data-position="top" data-tooltip="View Cesar on LinkedIn" className="btn-floating btn-large waves-effect waves-light blue tooltipped"><i className="fa fa-linkedin"></i></a><a aria-label="Cesar on LinkedIn" href="https://linkedin.com/in/cesar-augusto-martinez-auquilla-03934a16b" className="hoverline" rel="noreferrer" target="_blank">linkedin.com/in/cesar-augusto-martinez-auquilla</a>
              </p>
            </div>
        </section>
    )
}

export default Contact
