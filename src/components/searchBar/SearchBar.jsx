import { FiSearch } from "react-icons/fi";
import css from "./Searchbar.module.css"



const SearchBar = ({onSubmit}) => {

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchParams=evt.currentTarget.elements.search.value
    onSubmit(searchParams)
  };
  return (
    <header>
    <form onSubmit={handleSubmit} className={css.SearchForm}>
      <input
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        className={css.SearchInput}
      />
      <button type="submit" aria-label="search" className={css.SearchButton}><FiSearch size="16px" /></button>
    </form>
  </header>
  )
}
 


export default SearchBar

// const SEARCH_INITIAL_VALUES = { searchTerm: "" };

// const SearchBar = ({handleSubmit }) => {
  
 
//   const searchBarSchema = Yup.object({
//     searchTerm: Yup.string().required("Search term is requared").trim()
//   })
//   return (
//     <header>
//       <Formik
//         initialvalues={SEARCH_INITIAL_VALUES}
//         validationSchema={searchBarSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form>
//           <label>
//             <Field type="text" name="searchTerm" autoComplete="off"
//               autoFocus placeholder="Search images and photos">
//             </Field>
//           </label>
//           <button type="submit" aria-label="Search">Search</button>
//         </Form>
//       </Formik>
//     </header>
//   )
// }