import React from "react";
import { getSession } from "next-auth/client";

import MyBookings from "../../components/booking/MyBookings";
import Layout from "../../components/layout/Layout";

import { myBookings } from "../../redux/actions/bookingActions";
import { wrapper } from "../../redux/store";

const MyBookingsPage = () => {
  return (
    <Layout title="My Bookings">
      <MyBookings />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      const session = await getSession({ req });

      if (!session) {
        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }

      await store.dispatch(myBookings(req.headers.cookie, req, query));
    }
);

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req, query }) => {
//       await store.dispatch(
//         getRooms(req, query.page, query.location, query.guests, query.category)
//       );
//     }
// );
export default MyBookingsPage;
