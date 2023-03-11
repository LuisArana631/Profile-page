import './Contact.css'
import pdfFile from '../../../assets/content/cv.pdf'

const contacts = require('../../../constants/contacts')

export const Contact = () => {

  const handleDownload = () => {
    const element = document.createElement('a')
    element.setAttribute('href', pdfFile)
    element.setAttribute('download', 'cv.pdf')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className='section contact' id='contact'>
      <div className='contact-info'>
        <h1 className='contact-title'>Get In Touch</h1>
        <p className='contact-desc'>Do not hesitate to contact me by mail or any social network.</p>
        <button onClick={handleDownload} className='download-cv-button'>Download CV</button>
      </div>
      <div className='contact-items'>
        {
          contacts.items.map((contactItem) => (
            <div key={`${contactItem.id}contact`} className = {contactItem.className}>
                <a style={{ color: contactItem.color}} href={contactItem.url} target="_blank" className='span-contact' rel="noreferrer">
                  <div className='circle-icon' style={{ backgroundColor: contactItem.color }}>
                    {contactItem.icon}
                  </div>
                  {contactItem.name}
                </a>
              </div>
          ))
        }
      </div>
    </div>
  )
}