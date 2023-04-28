import React from "react";
import Container from "../components/Container";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Treatments = () => {
  const params = useParams();
  console.log(params);
  return (
    <Container>
      <div className="h-fit py-10 w-screen bg-white flex flex-col items-center">
        <h1 className="text-3xl font-serif font-bold text-cyan-900 mt-4">
          Treatments
        </h1>
        <h1 className="px-8 md:px-96 mt-8  font-light text-gray-500">
          Most cases of rickets can be treated with vitamin D and calcium
          supplements. Follow your child's doctor's directions as to dosage. Too
          much vitamin D can be harmful. Your child's doctor will monitor your
          child's progress with X-rays and blood tests.
        </h1>
        <h1 className="mt-16 font-serif font-bold text-2xl text-gray-600 text-center">
          What happens if rickets is left untreated?
        </h1>
        <li className="px-8 md:px-96 mt-8  font-light text-gray-500">
          Most cases of rickets can be treated with vitamin D and calcium
          supplements. Follow your child's doctor's directions as to dosage. Too
          much vitamin D can be harmful. Your child's doctor will monitor your
          child's progress with X-rays and blood tests.
        </li>
        {params.id == 1 && (
          <div>
            <h1 className="mt-16 font-serif font-bold text-2xl text-gray-600 text-center">
              What are the basic Treatments for Rickets?
            </h1>
            <li className="px-8 md:px-96 mt-8  font-light text-gray-500">
              Keeping a close eye on the child's vitamin D intake to avoid
              excess consumption.
            </li>
          </div>
        )}
        {params.id == 2 && (
          <div className="w-full bg-white">
            <h1 className="mt-16 font-serif font-bold text-2xl text-gray-600 text-center">
              What are the basic Treatments for Rickets?
            </h1>
            <li className="px-8 md:px-96 mt-8  font-light text-gray-500">
              Keeping a close eye on the child's vitamin D intake to avoid
              excess consumption.
            </li>
            <li className="px-8 md:px-96 mt-2  font-light text-gray-500">
              Vitamin D and calcium supplements as the first line of defense
              against rickets.
            </li>
            <li className="px-8 md:px-96 mt-2  font-light text-gray-500">
              A daily vitamin D dose of 1,000 to 2,000 International Units is
              advised for babies.
            </li>
            <li className="px-8 md:px-96 mt-2  font-light text-gray-500">
              A daily calcium intake of 1,000 to 1,500 milligrams (mg) is
              suggested for children with rickets.
            </li>
          </div>
        )}
        {params.id == 3 && (
          <div className="w-full bg-white">
            <h1 className="mt-16 font-serif font-bold text-2xl text-gray-600 text-center">
              What are the basic Treatments for Rickets?
            </h1>
            <li className="px-8 md:px-96 mt-8  font-light text-gray-500">
              Keeping a close eye on the child's vitamin D intake to avoid
              excess consumption.
            </li>
            <li className="px-8 md:px-96 mt-2  font-light text-gray-500">
              Vitamin D and calcium supplements as the first line of defense
              against rickets.
            </li>
            <li className="px-8 md:px-96 mt-2  font-light text-gray-500">
              A daily vitamin D dose of 1,000 to 2,000 International Units is
              advised for babies.
            </li>
            <li className="px-8 md:px-96 mt-2  font-light text-gray-500">
              A daily calcium intake of 1,000 to 1,500 milligrams (mg) is
              suggested for children with rickets.
            </li>
            <li className="px-8 md:px-96 mt-2  font-light text-gray-500">
              Administering drugs along with vitamins in situations of rickets
              caused by rare hereditary illnesses.
            </li>
          </div>
        )}
      </div>
      <Footer />
    </Container>
  );
};

export default Treatments;
