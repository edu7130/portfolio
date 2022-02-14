import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContainerSection, Center, H1 } from '../../golbal-styles'
import { redirects } from '../../data/redirects';
import { Content } from './Redirect.elements';

export const Redirect = () => {
    const { project } = useParams();

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        success: null,
        message: `Searching project ${project}..`,
        name: null,
        url: null
    });
    const { message, name, url, success } = data;

    useEffect(() => {
        setTimeout(() => {
            const pr = redirects.find(p => p.nameUrl === project)

            if (pr) {
                setData({
                    success: true,
                    message: `Redirecting to`,
                    name: pr.name,
                    url: pr.url
                })
                window.open(pr.url, 'nopener')
            }
            else {
                setData((data)=>({ ...data, success: false }))
            }
            setLoading(false);
        }, 0);
    }, [project])




    return (
        <ContainerSection>
            <Center>
                {
                    loading
                        ? <h1>Searching app...</h1>
                        :
                        <Content>
                            <img src={success ? `${process.env.PUBLIC_URL}/assets/svg/link_redirect.svg` : `${process.env.PUBLIC_URL}/assets/svg/404.svg`} alt='redirect' />
                            <H1>{success ? message : 'App not exist'}</H1>
                            {name && <h3>{name}</h3>}
                            {
                                url && <a href={url} target='_blank' rel="noreferrer">{url}</a>
                            }
                        </Content>
                }
            </Center>
        </ContainerSection>

    )
}
