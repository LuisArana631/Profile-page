import styles from "@/app/contact/contact.module.css"
import ContactCode from "@/components/ContactCode"
import ContactForm from "@/components/ContactForm"

export const metadata = {
  title: "Contact | Luis Arana's Portfolio"
}

export default function Contact() {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Reach Out Via Socials</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Or Fill Out This Form</h3>
        <ContactForm />
      </div>
    </div>
  )
}