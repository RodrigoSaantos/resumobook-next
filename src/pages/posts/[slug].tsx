import { GetServerSideProps } from "next";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";

export default function Post(props) {

    console.log(props)
    return (
        <h1>Hello word</h1>
    )
}

export const getServerSideProps: GetServerSideProps = async ({
    req,
    params,
  }) => {
      
    const { slug } = params;
  
    const prismic = getPrismicClient(req);
  
    const response = await prismic.getByUID('post', String(slug), {});
  
    const post = {
      slug,
      title: RichText.asText(response.data.title),
      introduction: RichText.asText(response.data.introduction),
      content: response.data.content,
      affiliate: response.data.affiliate.url,
      ended: response.data.ended,
      date: response.data.date,
    //   updatedAt: new Date(response.last_publication_date).toLocaleDateString(
    //     'pt-BR',
    //     {
    //       day: '2-digit',
    //       month: 'long',
    //       year: 'numeric',
    //     },
    //   ),
    };
  
    return {
      props: {
        post,
      },
    };
  };