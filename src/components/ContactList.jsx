import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faTrash } from '@fortawesome/free-solid-svg-icons';

const ContactList = () => {
  return (
    <div className="w-full lg:w-6/12 p-5 mt-5 bg-white bg-opacity-50 mx-auto shadow-lg rounded-lg ">
      <table className="w-full text-sm text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 bg-opacity-80">
          <tr>
            <th scope="col" className="p-1">
              Full Name
            </th>
            <th scope="col" className="p-1">
              Department
            </th>
            <th scope="col" className="p-1">
              Phone Number
            </th>
            <th scope="col" className="p-1">
              Action
            </th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr className="bg-white border-b bg-opacity-80 text-center hover:bg-gray-50">
            <th className="flex items-center p-1 font-medium text-gray-900 whitespace-nowrap">
              <div className="text-center w-full">
                <div className="text-base font-semibold">
                  first_name last_name
                </div>
                <div className="font-normal text-gray-500">email</div>
              </div>
            </th>
            <td className="p-1">department</td>
            <td className="">phone</td>
            <td className="p-1">
                <FontAwesomeIcon icon={faPenNib} className="text-2xl text-blue-300 pr-3 cursor-pointer" />
                <FontAwesomeIcon icon={faTrash} className="text-2xl text-red-800 cursor-pointer" />
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;