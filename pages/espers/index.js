import { Component } from 'react';
import Layout from '../../components/Layout';
// import loadEsper from '../../lib/loadEsper';
import Grid from '../../components/Esper/Grid';

export async function getServerSideProps() {
    // const espers = await loadEsper();
    const espers = {
        status: 'success',
        length: 10,
        data: [
            {
                id: 1,
                esper: 'Alexa',
                etoile: 4,
                atk: 874,
                hp: 12783,
                def: 1014,
                spd: 102,
                summary:
                    "Alexa is one of the only Espers in the game that can reflect damage taken with her Kiss of the Nightingale buff. As a Support Esper, she has the ability to balance all allied Espers' HP ratios, whilst healing (based on their max HP) and reducing the cooldowns of the Esper that has the Kiss of the Nightingale buff, which is strong on an Esper that needs to get out of a tough situation. She's best paired with other Support espers, such as: Chang Pu and Unky Chai.",
                picture: '/picture/esper/alexa.png',
                icone: '/picture/esper/card/alexa.png',
            },
            {
                id: 2,
                esper: 'Anesidora',
                etoile: 4,
                atk: 850,
                hp: 15118,
                def: 874,
                spd: 100,
                summary:
                    "An extremely useful Support Esper for Infinity Miracle. Anesidora is centered around her unique debuff called Pandora's Box, which after 2 turns detonates, inflicting a Stun (requires ACC) and reduces inflicted Espers' current HP by up to 50%. She can dispel buffs, and even activate her Pandora's Box debuff early with her A2 (requires ACC), making her exceptional at controlling an enemy team in PvE. Best paired with another Controller Esper like: Long Mian, or Pritzker.",
                picture: '/picture/esper/anesidora.png',
                icone: '/picture/esper/card/anesidora.png',
            },
        ],
    };
    return { props: { espers } };
}

class Esper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            espers: props,
        };
    }

    render() {
        const { espers } = this.state;
        return (
            <Layout>
                <Grid>{espers}</Grid>
            </Layout>
        );
    }
}

export default Esper;
