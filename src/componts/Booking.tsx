import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Event.css";  

interface Booking {
  id: number;
  username: string;
  number: string;
  product: string;
  product_name: string;
}

const Book: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
  const [itemToDelete, setItemToDelete] = useState<{ id: number } | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Add loading state

  const getBookings = async () => {
    setLoading(true); // Set loading to true before API call
    try {
      const response = await axios.get("http://localhost:3000/api/booking");
      console.log(response.data)
      if (Array.isArray(response.data)) {
        // Ensure the response data is an array
        const sortedBookings = response.data.sort((a: Booking, b: Booking) => a.id - b.id);
        setBookings(sortedBookings); // Update bookings with sorted data
      } else {
        console.error("Invalid data format:", response.data); // Log error if data is not an array
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false when request finishes
    }
  };

  useEffect(() => {
    getBookings();
  }, []); // Empty array ensures this runs once when the component mounts
  
  // Delete a booking
  const deleteBooking = async () => {
    if (itemToDelete) {
      try {
        await axios.delete(`http://localhost:3000/api/bookdelete/${itemToDelete.id}`);
        setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== itemToDelete.id));
        setShowConfirmDelete(false);
        setItemToDelete(null);
      } catch (error) {
        console.error("Error deleting booking:", error);
        setShowConfirmDelete(false);
      }
    }
  };

  const requestDelete = (id: number) => {
    setItemToDelete({ id });
    setShowConfirmDelete(true);
  };

  const handleCancelDelete = () => {
    setShowConfirmDelete(false);
    setItemToDelete(null);
  };

  return (
    <div className="content">
      <h2>Admin Dashboard</h2>
      {loading ? ( // Show loading spinner or message while fetching
        <p>Loading bookings...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Number</th>
              <th>Product</th>
              <th>Product Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.username}</td>
                <td>{booking.number}</td>
                <td>{booking.product}</td>
                <td>{booking.product_name}</td>
                <td>
                  <button className="delete-button" onClick={() => requestDelete(booking.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showConfirmDelete && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Are you sure you want to delete this booking?</h3>
            <div className="modal-actions">
              <button className="modal-button cancel" onClick={handleCancelDelete}>
                Cancel
              </button>
              <button className="modal-button confirm" onClick={deleteBooking}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
