import { BibleVerse } from "./BibleVerse/BibleVerse"
import CTA from "./CTA/CTA"
import ContentBlock from "./ContentBlock/ContentBlock"
import HomeHeader from "./HomeHeader/HomeHeader"
import Header from "./Header/Header"
import DonationOptions from "./DonationOptions/DonationOptions"
import ChurchBeliefs from "./ChurchBeliefs/ChurchBeliefs"
import ChurchPartners from "./ChurchPartners/ChurchPartners"
import EventMenu from "./EventsMenu/EventsMenu"
import ContactForm from "./ContactForm/ContactForm"
import SermonArchive from "./SermonArchive/SermonArchive"

export const components = {
  home_header: HomeHeader,
  header: Header,
  bible_verse: BibleVerse,
  call_to_action: CTA,
  content_block: ContentBlock,
  donation_options: DonationOptions,
  church_partners: ChurchPartners,
  event_menu: EventMenu,
  contact_form: ContactForm,
  sermon_archive: SermonArchive,

  //Extra _ because prismis is silly
  church_beliefs_: ChurchBeliefs,
}
