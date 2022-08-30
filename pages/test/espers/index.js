import PropTypes from 'prop-types';
import CardGrid from '../../../components/CardGrid';
import Layout from '../../../components/Layout';

export async function getServerSideProps() {
  const data = {
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
      {
        id: 3,
        esper: 'Arcana',
        etoile: 4,
        atk: 1123,
        hp: 11644,
        def: 860,
        spd: 105,
        summary:
          'A Disabler Esper with the highest base SDP in the game; Arcana is a Disabler that mainly is used for dispelling buffs with his A3. He also has an A2 that can Stun an enemy and AP Absorb, and an A1 that can inflict Miss Rate Up. Whilst Arcana can be used as a dispel Esper, he is usually outperformed by Espers like Raven, Triki, and even Bonnie.',
        picture: '/picture/esper/arcana.png',
        icone: '/picture/esper/card/arcana.png',
      },
      {
        id: 4,
        esper: 'Asenath',
        etoile: 4,
        atk: 810,
        hp: 15679,
        def: 874,
        spd: 100,
        summary:
          "A great overall Support Esper. Asenath's Recovery and Lotus Mark buffs make her a great addition to any team, reducing damage taken and increasing her AP to make sure she frequently takes turns to heal allies. Asenath's pro-active abilities are powerful when used in situations when you know damage is going to happen, but can be countered when timed wrong.",
        picture: '/picture/esper/asenath.png',
        icone: '/picture/esper/card/asenath.png',
      },
      {
        id: 5,
        esper: 'Bai Liuli',
        etoile: 3,
        atk: 1097,
        hp: 10877,
        def: 810,
        spd: 99,
        summary:
          'Bai Liuli is a DPS Esper that combines utility with average damage. Her passive cleanses a random debuff each turn on herself, and heals all allies by 5% on the start of her turn which can be helpful in keeping allies at full health. Her A3 attacks 5 enemies at random (prioritising new targets and dealing less damage to same targets hit) and has a chance to steal buffs on hit.',
        picture: '/picture/esper/bailiuli.png',
        icone: '/picture/esper/card/bailiuli.png',
      },
      {
        id: 6,
        esper: 'Bardon',
        etoile: 3,
        atk: 829,
        hp: 11035,
        def: 1082,
        spd: 95,
        summary:
          "Bardon is a Tank Esper that utilises counterattacks to support his low-health allies with his passive. When an ally is hit whilst on low health, his passive gives him the chance to Taunt enemies as he counterattacks, once a turn. He also has a Stun built into his A1, but Bardon doesn't counterattack using his A1 and instead attacks with his passive. ",
        picture: '/picture/esper/bardon.png',
        icone: '/picture/esper/card/bardon.png',
      },
      {
        id: 7,
        esper: 'Berenice',
        etoile: 3,
        atk: 860,
        hp: 12810,
        def: 910,
        spd: 97,
        summary:
          'Berenice is one of the few Espers in the game who has an ability that grants a Shield to allies for 2 turns based on her max HP, with the extra ability to strengthen the Shield if the ally is already buffed. She also has an ability that can inflict DEF Down, and an ability that can AP Down the enemy - both multi-hit abilities which are extremely useful against Fafnir.',
        picture: '/picture/esper/berenice.png',
        icone: '/picture/esper/card/berenice.png',
      },
      {
        id: 8,
        esper: 'Biondina',
        etoile: 5,
        atk: 1242,
        hp: 11176,
        def: 926,
        spd: 104,
        summary:
          'A strong DPS Esper mainly used in Point War against defensive teams. Her A3 ignores 100% DEF if the enemy has no buffs, and her passive when fully levelled removes all buffs on one target at the start of her turn, which cannot miss. Couple this with buffs and her Captain Ability that increases ally ATK by 40% Point War, she can easily defeat an Esper on her first turn without issue. Best paired with dispel Espers such as: Raven, Triki, and Bonnie.',
        picture: '/picture/esper/biondina.png',
        icone: '/picture/esper/card/biondina.png',
      },
      {
        id: 9,
        esper: 'Bonnie',
        etoile: 4,
        atk: 910,
        hp: 13721,
        def: 912,
        spd: 105,
        summary:
          'A high base speed Support Esper; Bonnie is exceptionally strong with an AoE A3 that has the ability to increase the cooldown of enemy abilities by 1 turn. This cooldown increase can bypass the Immunity buff, making it an incredibly strong ability to start the battle with in Point War. She also converts dispelled buffs with her A3 into 5% AP Up for each ally.',
        picture: '/picture/esper/bonnie.png',
        icone: '/picture/esper/card/bonnie.png',
      },
    ],
  };
  return { props: { data } };
}

export default function Character(props) {
  const { data } = props;
  if (data.status === 'success') {
    return (
      <Layout>
        <CardGrid>
          {data}
        </CardGrid>
      </Layout>
    );
  }
}

Character.propTypes = {
  data: PropTypes.arrayOf(),
};
Character.defaultProps = {
  data: {},
};
