import { createSlice } from "@reduxjs/toolkit";

const ratingSlice = createSlice({
  name: "rating",
  initialState: [
    {
      name: "Vu Nguyen",
      stars: 5,
      review:
        "You want tradition? You want a place that makes you sit and wait awhile and forces you to have a conversation with one another as your pizza is cooked to perfection? You want a place that makes you feel cozy and not feel stressed about what you have to wear? (PP) is one of the original pizza places in (City) keeping the tradition on what it means to be Italian. This place makes you feel like family. Don’t be afraid to order something other than pizza because whatever you order will be on point.",
      time: {
        date: 22,
        month: "October",
        year: 2021,
      },
      avatar:
        "https://secure.gravatar.com/avatar/58339abbf7950af484818a32567a68b2?s=120&d=mm&r=g",
    },
    {
      name: "Harry Kane",
      stars: 4.2,
      review: `The best pizza we ever had in (City)!! The pizza was so delicious and with so many flavor could choose that we even visited the pizza shop twice in the same day!
        You could just take away or standing finish your pizza in the store.`,
      time: {
        date: 24,
        month: "October",
        year: 2021,
      },
      avatar:
        "https://secure.gravatar.com/avatar/58339abbf7950af484818a32567a68b2?s=120&d=mm&r=g",
    },
    {
      name: "Jesse Lingard",
      stars: 4.0,
      review:
        "I had the best pizza of my life at that time. Since then I have visited this place numerous times and my opinion about this pizza has still not changed.",
      time: {
        date: 2,
        month: "October",
        year: 2021,
      },
      avatar:
        "https://secure.gravatar.com/avatar/58339abbf7950af484818a32567a68b2?s=120&d=mm&r=g",
    },
    {
      name: "Ronaldo",
      stars: 4.5,
      review:
        "The pizza here is real amazing and would recommend trying these guys out. They have a great toppings selections and great prices on a single sliced.",
      time: {
        date: 2,
        month: "October",
        year: 2021,
      },
      avatar:
        "https://secure.gravatar.com/avatar/58339abbf7950af484818a32567a68b2?s=120&d=mm&r=g",
    },
    {
      name: "Duy Vu",
      stars: 4.5,
      review:
        "I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.",
      time: {
        date: 2,
        month: "October",
        year: 2021,
      },
      avatar:
        "https://secure.gravatar.com/avatar/58339abbf7950af484818a32567a68b2?s=120&d=mm&r=g",
    },
  ],

  reducers: {
    addReview: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addReview } = ratingSlice.actions;
export default ratingSlice.reducer;
