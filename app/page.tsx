import Image from "next/image"
import { Grid } from "@mui/material"

export default function Home() {
  return (
    <Grid container>
      {/* comment out when you want headers */}
      {/* <Grid
        size={12}
        container
        columnSpacing={4}
        justifyContent="center"
        paddingY={1}
        bgcolor="#E6EBFF"
        style={{ color: "#1d2d95" }}
      >
        <a href="./">Home</a>
        <a href="./services">Services</a>
        <a href="./about">About</a>
      </Grid> */}
      <Grid
        size={12}
        bgcolor="#1d2d95"
        color="rgba(230, 235, 255, 1)"
        textAlign="center"
      >
        +1 (404) 819 - 8826
      </Grid>

      <Grid
        size={6}
        container
        justifyContent="center"
        alignItems="center"
        padding={10}
        style={{
          background:
            "linear-gradient(180deg,rgba(230, 235, 255, 1) 0%, rgba(227, 255, 239, 1) 86%, rgba(255, 255, 255, 1) 100%)",
          color: "#1d2d95",
        }}
      >
        <Grid size={12}>
          <h2 style={{ color: "#4c5dd0" }}>Your Own Professional</h2>
          <h2 style={{ color: "#43c57b" }}>Local Laundromat</h2>
        </Grid>
        <Grid size={12}>
          <ul>
            <li>
              <h4>Eco friendly dry cleaning</h4>
            </li>
            <li>
              <h4>All cleaning done in Roswell facilities</h4>
            </li>
            <li>
              <h4>High quality detergents and softeners</h4>
            </li>
            <li>
              <h4>100% satisfaction guaranteed</h4>
            </li>
          </ul>
        </Grid>
        <Grid size={12}>
          <p>
            We handle your clothes and materials with the utmost care. Call us
            today for spectacular cleaning!
          </p>
        </Grid>
      </Grid>

      <Grid
        size={6}
        style={{
          background:
            "linear-gradient(180deg,rgba(230, 235, 255, 1) 0%, rgba(227, 255, 239, 1) 86%, rgba(255, 255, 255, 1) 100%)",
        }}
        textAlign="center"
      >
        <Image
          src="/front.png"
          alt="Front of the building"
          width={400}
          height={400}
        />
      </Grid>
      <Grid
        textAlign="center"
        size={12}
        paddingY={4}
        style={{ color: "#1d2d95" }}
      >
        <h1 style={{ color: "#4c5dd0" }}>Welcome to</h1>
        <h1 style={{ color: "#43c57b", paddingBottom: 12 }}>
          All Star Cleaners
        </h1>
        <p>
          For over 20 years, we&apos;ve been taking care of Roswell&apos;s
          laundry services. Let us help you today!
        </p>

        <p>
          <i>
            Accepted payment methods include: Visa, MasterCard, Discover, Amex,
            Apple Pay, cash
          </i>
        </p>
        <br />

        <p>
          <b>1000 Marietta Hwy</b>
          <br />
          <b>Roswell, GA 30075</b>
        </p>
        <br />
      </Grid>
      <Grid
        container
        columnSpacing={4}
        padding={8}
        justifyContent="center"
        width="100%"
      >
        <Grid
          style={{ width: 350 }}
          textAlign="center"
          bgcolor="rgba(227, 255, 239, 1)"
          borderRadius={4}
          padding={4}
        >
          <h1>🤝🏽</h1>
          <h2>Our commitment</h2>
          <p>
            A laundromat that understands the essential role it plays in daily
            life, offering a reliable, accessible solution for individuals and
            families who may not have in-home laundry facilities or high quality
            solutions for individuals and families who seek luxury cleanings of
            their clothing.{" "}
            <b>
              Our mission is rooted in consistency, cleanliness, and
              convenience, ensuring that every customer — regardless of
              background — has a place to care for one of life&apos;s most basic
              needs.
            </b>{" "}
            By maintaining high standards of equipment, cleanliness, and
            customer service, this laundromat creates a dependable environment
            where people can manage their routines with ease.
          </p>
        </Grid>
        <Grid
          style={{ width: 350 }}
          textAlign="center"
          bgcolor="rgba(227, 255, 239, 1)"
          borderRadius={4}
          padding={4}
        >
          <h1>🚛</h1>
          <h2>Pick up and delivery service</h2>
          <p>
            To make laundry even more convenient, our laundromat offers pick-up
            and delivery services, allowing customers to have their clothes
            cleaned without ever leaving home. With just a simple online or
            phone request, our laundromat picks up dirty laundry, washes, dries,
            folds, and returns it fresh and ready to wear. Our service is
            perfect for busy professionals, families, or anyone looking to save
            time, adding a layer of ease and efficiency to their routine.
            <b> A delivery fee may be included based on location.</b>
          </p>
        </Grid>
        <Grid
          style={{ width: 350 }}
          textAlign="center"
          bgcolor="rgba(227, 255, 239, 1)"
          borderRadius={4}
          padding={4}
        >
          <h1>🙆🏼</h1>
          <h2>Expert staff</h2>
          <p>
            Our laundromat&apos;s team is made up of dedicated, professional
            staff who take pride in delivering high-quality service with care
            and attention to detail. From handling garments with respect to
            maintaining clean and efficient machines, every team member is
            trained to ensure a smooth and pleasant experience for customers.
            Our friendly attitude, prompt assistance, and commitment to
            cleanliness reflect our laundromat&apos;s values and reliability.
            Whether answering questions, managing pick-up and delivery orders,
            or troubleshooting equipment,{" "}
            <b>
              our team operates with professionalism and a strong focus on
              customer satisfaction.
            </b>
          </p>
        </Grid>
      </Grid>
    </Grid>
  )
}
