import React from 'react';
import { Layout, SuggestionForm } from '../components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

import imgFootprint from '../images/guides/footprint-example.png';
import imgShell from '../images/guides/shell-greenwash.jpg';

export default () => (
  <Layout title="Carbon Offsetting">
    <Jumbotron
      style={{
        marginTop: '1rem',
        minHeight: '45vh',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundImage:
          'url(https://source.unsplash.com/featured/1600x400?reforestation)',
      }}
    />
    <Container>
      <Row>
        <Col>
          <h1>Is "Carbon Offsetting" Good or Bad?</h1>

          <p>
            Depending on who you talk to, it might be touted as the solution to
            all the worlds problems, greenwashing, fraud, a distraction which
            perpetuates the status quo and hampers real climate action, or a
            complex grey area which needs a bit of explanation to understand
            properly. Let's explain why people are so divided.
          </p>

          <p>
            Carbon offsetting is generally the idea of a person, business, or
            government, paying some amount of money to an organization who is
            working on a project to reduce emissions, or capture existing
            emissions. These activities could be all sorts of things:
          </p>

          <ul>
            <li>Planting trees to suck up CO2 over time</li>
            <li>Protecting woodlands from being cut down</li>
            <li>
              Handing out efficient cooking stoves in developing countries to
              avoid trees being cut down and burned
            </li>
            <li>
              Funding renewable energy projects to reduce/eliminate reliance on
              fossil fuels
            </li>
            <li>Capturing methane gas emissions from sites like landfills</li>
          </ul>

          <p>
            In theory, carbon offsetting is a great idea, but any good can be
            corrupted by greed.
          </p>

          <h2 id="airlinesprofitingoffthestatusquo">
            Airlines profiting off the status quo
          </h2>

          <p>
            Various airlines picked up the idea and offer their own carbon
            offsetting programs. They charge a small fee on top of the ticket
            price, but usually provide very little insight into where that money
            is going, what it's doing, how much goes in admin costs.
          </p>

          <p>For example, Ryan Air were caught in a lie.</p>

          <blockquote>
            <p>
              While [Ryan Air] do contribute to carbon offset programs, The BBC
              determined that in order to completely offset the fossil fuels
              their flights were burning, the airline would have to plant and
              cover 12 percent of the United Kingdom in new trees. Their program
              only planted seven acres of new forest. -- Source:{' '}
              <a href="https://www.travelandleisure.com/airlines-airports/easyjet-offset-carbon-emissions-airplanes-environmental-impact">
                travelandleisure.com
              </a>
            </p>
          </blockquote>

          <p>
            Planting only seven acres of "new forest" - which is basically 7
            soccer pitches - will do basically nothing for the environment,
            definitely not support the continued operation of an entire fleet of
            aircraft. Ryan Air also had an advertisement banned over{' '}
            <a href="https://www.theguardian.com/business/2020/feb/05/ryanair-accused-of-greenwash-over-carbon-emissions-claim">
              greenwashing for exaggerating having the lowest carbon emissions
            </a>{' '}
            of all the airlines. Airlines have proven themselves untrustworthy
            when it comes to their claims of offsetting, efficiency, or anything
            else to do with the climate.
          </p>

          <p>
            As well as the legitimacy concern, there is a psychological aspect.
            Various studies suggest that carbon offsets promote a high-emission
            lifestyle, letting people think they can keep on flying and "fixing
            it" with a small charge on their credit card. The continuation of
            flying means more emissions than any reforestation can handle, more{' '}
            <a href="https://d5i6is0eze552.cloudfront.net/documents/Destination-deforestation_Oct2019.pdf">
              habitat destruction
            </a>{' '}
            as new runways are expanded.
          </p>

          <p>
            Airline fuel is dirty, and the much promised{' '}
            <a href="https://www.regnskog.no/en/news/aviation-climate-targets-may-drive-3-million-hectares-of-deforestation">
              biofuels generally involve a huge amount of deforestation
            </a>
            .{' '}
            <a href="https://www.businessinsider.com/electric-planes-future-of-aviation-problems-regulations-2020-3?r=US&IR=T">
              Electric planes are decades away
            </a>{' '}
            from replacing large passenger jets. Regulations are starting to put
            pressure on airlines to reduce their impact, but the rising demand
            for flights is outstripping any reduction in emissions.{' '}
            <a href="http://news.mit.edu/2010/explained-radforce-0309">
              Emissions at altitude have a compounding effect
            </a>{' '}
            which make flying{' '}
            <a href="https://www.bbc.com/news/science-environment-49349566">
              the worst way to get around in most scenarios
            </a>{' '}
            (other than, for example, a short jump over a mountain range versus
            a very long drive around the mountain range).
          </p>

          <p>
            Nobody likes to hear this but the solution genuinely is to stop
            flying. 2% of the worlds emissions come from air travel, but only
            10% of people in the world fly. 2% is the same amount as{' '}
            <a href="https://informationisbeautiful.net/visualizations/how-to-reduce-the-worlds-carbon-footprint-by-2050/">
              processing the entire worlds sewage
            </a>
            , and 100% of the world are involved in that. The price is
            unrealistically low due to taxpayers subsidizing the costs, and why
            should we all pay for 15% of people to jet about on fancy holidays,
            putting all of our health and existence at risk.
          </p>

          <p>
            Offsetting cannot make flying sustainable, and airlines suggesting
            so are just trying fix their reputation with the increasingly
            climate-conscious public, and are doing so by passing the cost on to
            you. They might pocket your money by doing literally nothing, or
            maybe they'll do "not enough" with it, but offsetting definitely is
            not the answer here. We need an aviation carbon tax or at the very
            least a "frequent flier tax", which will raise flying to a realistic
            price and in turn provide funding for electric trains.{' '}
          </p>

          <p>
            Flying could be 25% of your carbon footprint for the year, so it's
            probably the lowest hanging fruit for personal change. Climate
            activists like George Manibot reduce their flying to once every
            three years, but many Americans fly more than once a month, and no
            amount of money can soak up that rate of emission.
          </p>

          <p>
            Airlines aren't the only polluting industry excited to market
            offsetting as a solution to their bad press, petrol stations are
            getting in on the greenwashing too.
          </p>

          <img
            src={imgShell}
            alt="Shell poster promoting an app where you can carbon offset your driving"
            style={{ width: '100%' }}
          />

          <p>
            Just because the polluting industries support offsetting, doesn't
            make offsetting a bad idea. They're generally pushing a weak
            unprovable cheap version of it to benefit their marketing more than
            anything else. To avoid getting caught out, they generally like to
            push the least provable approaches to offsetting too.
          </p>

          <h2 id="morethanjusttrees">More Than Just Trees</h2>

          <p>
            Some organizations offering to offset CO2 will only talk about
            trees, and this is a bit of a problem. For starters, reforestation
            is the most difficult approach to regulate. Survival rate of the
            trees from weather, beetles, disease, mold, ivy, deer, rabbits, etc
            is hard to prove. Care can be taken to protect against many of these
            impacts, but that costs money, so you need a reforestation that
            actively cares about the outcome, instead of one which is trying to
            make a bit of money from peoples guilt, and you need to be sure
            they're not going to clear cut those trees in 10 years. There are a
            lot of{' '}
            <a href="https://plantit2020.org/pdf/Scams_Short_Edited.pdf">
              scams in the reforestation space
            </a>
            .
          </p>

          <p>
            Beyond that, just the number of trees to offset CO2 emissions from a
            large number of people is untenable! Let's try a bit of math and and
            use the United Kingdom as an example.{' '}
          </p>

          <p>
            A single tree can absorb roughly 1 tonne of CO2 emissions (tCO2e) in
            its ~100yr lifespan. The average Brit outputs 10 tCO2e a year
            (fairly common in developed countries, and much higher in the USA
            which is about 21tCO2e per person).{' '}
          </p>

          <p>
            Assuming 100% of trees survive beetles, rot, fire, storms,
            temperature increase, etc., we'd need to plant 10 trees per-person,
            per-year. That's 700 trees needed per-person to offset their entire
            lifetime.{' '}
          </p>

          <p>
            700 trees is roughly 1 acre of land, so we'd need one acre of land
            per person.{' '}
          </p>

          <p>
            60 million people = 60 million acres. The UK is 59.9218 million
            acres...{' '}
          </p>

          <p>
            That means we'd need a blank slate of land that's 101% the size of
            the United Kingdom. Even after kicking all the farmers off of the
            75% of the UK which is currently farmland, there would still not be
            enough land. In order to go carbon neutral through reforestation
            alone, the UK would need to dig up all the roads, level every single
            building, build tree-houses for all the inhabitants, reforest every
            village square, cricket field, somehow find a way to plant trees in
            mountain tops and lakes, then protect them all from beetles, deer,
            rabbits, and birds from eating all the seeds, we'd still be 13%
            short due to existing forest cover which we certainly wouldn't want
            to level and plant fresh...
          </p>

          <p>
            Most developed countries do not have enough forestable land to cover
            the footprints of those living there with their current emission
            levels, so they reforest Madagasgar, Nepal, Kenya, and other
            countries which absolutely need it, but those trees are going to
            take too long to soak up all the emissions we're spitting out now,
            and we need levels to drop substantially by 2030 not 2100.
          </p>

          <p>
            Planting trees <strong>alone</strong> is not going to save the day,
            but we absolutely need to increase{' '}
            <a href="https://ourworldindata.org/forests">
              the woodland cover of all the countries around the world
            </a>
            . The UK currently has 7.8 million acres out of 60 million acres,
            which is ~13%. We should be aiming for at least 25%, but we also
            need to fund other projects which can have a much bigger short term
            impact on CO2 levels as well. For this reason, legitimate offsetting
            projects will hedge their bets with a two-pronged approach.{' '}
          </p>

          <p>
            For example, <a href="https://offset.earth/">Offset Earth</a> do
            support reforestation projects such as{' '}
            <a href="https://edenprojects.org/">Eden Reforestation</a>, but they
            also support Gold Standard certified projects like these:
          </p>

          <ul>
            <li>
              <a href="https://offset.earth/projects/istanbul-landfill-gas-extraction">
                Istanbul Landfill Gas Extraction
              </a>
            </li>
            <li>
              <a href="https://offset.earth/projects/peruvian-protection-of-the-amazon">
                Peruvian Protection of the Amazon
              </a>
            </li>
            <li>
              <a href="https://offset.earth/projects/solar-project-in-maharashtra-india">
                Solar power in Maharashtra, India
              </a>
            </li>
            <li>
              <a href="https://offset.earth/projects/bio-digesters-for-rural-vietnamese-farmers">
                Bio-digesters for rural Vietnamese farmers
              </a>
            </li>
            <li>
              <a href="https://offset.earth/projects/improved-stoves-in-eritrea">
                Improved stoves in Eritrea
              </a>
            </li>
            <li>
              <em>
                <a href="https://offset.earth/projects/">
                  Loads of other projects
                </a>
              </em>
            </li>
          </ul>

          <p>
            These are all amazing projects picked from the{' '}
            <a href="https://registry.goldstandard.org/projects">
              Gold Standard Registry
            </a>{' '}
            which need more support to grow their impact and improve quality of
            life for people all over the developing world.
          </p>

          <p>
            Another interesting approach is directly capturing carbon dioxide
            from the air is another interesting approach which seems to be
            slowly improving over time, with
            <a href="">Climeworks</a> https://climeworks.shop/) offering a
            monthly subscription to back their project, which is about €50 a
            month to remove 0.6 tonnes from the environment, which over could
            wipe out 7.2 tonnes for €800. Are you willing to pay €800 a month to
            offset most of your footprint?
          </p>

          <p>
            Sending money to projects like this is solving problems around the
            world, reducing and trapping emissions, and hopefully if they all
            scale enough through any means then we'll see emissions drop, but
            most people cannot afford to offset the amount they actually
            produce: because we all produce too much CO2e and offsetting it
            fully and legitimately is expensive.{' '}
          </p>

          <h2 id="reducingvsoffsetting">Reducing vs Offsetting</h2>

          <p>
            Most of the problems folks have with offsetting stems from some
            companies (usually the greenwashers) pretending that we can just pay
            a little money, continue driving, continue flying, and continue
            eating an overly meat-rich diet, and we completely agree there.
          </p>

          <p>
            There's only so many rocket stoves, wind farms, and biodigesters we
            can give to folks before those sources of CO2 avoidance are tapped
            out, at which point we have to look for other sources of carbon
            emissions: like flying, driving, and what we eat. There's no point
            in delaying this step, we need to start avoiding these emissions
            immediately.
          </p>

          <p>
            To avoid the worst effects of climate change, we all get our
            individual carbon footprints down to{' '}
            <a href="https://www.tmrow.com/climatechange#objective--2-tons-co2eq-per-human-per-year-by-2050">
              5 tonnes a year by 2030
            </a>
            , then 2 tonnes a year by 2050. Whilst the previous examples of
            United Kingdom (10 tCO2e per person per year) and United States (20
            tCO2e per person per year), the{' '}
            <a href="https://www.independent.co.uk/environment/british-carbon-footprint-africa-emissions-oxfam-climate-change-a9271861.html">
              18 lowest emitting countries were in Africa, including Nigeria,
              Kenya and Zimbabwe
            </a>
            , all coming in under 1 tCO2e per person per year! it's worth
            thinking about this difference a little, and thinking: how many
            people are going to need to send money to charities to plant trees
            in these countries who are already living low carbon lifestyles,
            when I continue to live 5-15 tonnes over the top of the UN
            recommendations?
          </p>

          <p>
            Reducing your own emissions have a far more noticeable and direct
            impact, and often{' '}
            <a href="https://protect.earth/tags/save">save money</a>. That money
            can then be used to offset whatever footprint is remaining, or help
            cover some of the carbon reductions which require an up-front
            investment to reduce footprints over time (like solar panels and
            buying a bicycle).
          </p>

          <img
            src={imgFootprint}
            alt="Gold Standard's footprint change example for personal carbon emission reduction"
            style={{ width: '100%' }}
          />

          <p>
            Reducing and offsetting is the dream combination. For example, the{' '}
            <a href="http://shrinkthatfootprint.com/food-carbon-footprint-diet">
              average meat-based diet causes ~2.3 tCO2e
            </a>{' '}
            and an average plant-based vegan diet is ~1.3 tCO2e. If you switch
            from meta-based diet to veganism then that's a huge, important step
            towards a 5 tCO2 footprint, but there is still 1.3 tCO2e that could
            be offset. Everything we do has an emissions cost, even buying a
            bicycle and getting it delivered has a footprint, so tracking what
            your footprint is then actively seeking the reduction of that over
            time, within the UN recommended deadlines or before.
          </p>

          <ul>
            <li>
              <a href="/tags/track">track</a> your carbon footprint
            </li>
            <li>
              identify ways to <a href="/tags/reduce">reduce</a> footprint and
              waste
            </li>
            <li>
              <a href="/tags/shift">shift</a> to sustainable alternatives for
              things you currently do
            </li>
            <li>
              <a href="/tags/refuse">refuse</a> pointless trips and waste
            </li>
            <li>
              chose second hand and <a href="/tags/reuse">reuse</a> instead of
              buying new
            </li>
            <li>
              save cash learning to <a href="/tags/repair">repair</a> things
            </li>
            <li>
              <a href="/tags/recycle">recycle</a> as little as possible
            </li>
            <li>
              as a last resort <a href="/tags/offset">offset</a> what you cannot
              avoid any other way
            </li>
            <li>
              <a href="/tags/vote">vote</a> for politicians who will take
              drastic immediate action
            </li>
            <li>
              <a href="/tags/choose">choose</a> the companies we patronize, to
              encourage positive trends
            </li>
            <li>
              <a href="/tags/inspire">inspire</a> others to understand the
              gravity of the problems we're solving
            </li>
          </ul>

          <p>
            Relying on one step of the plan or squabbling about which ones are
            good or bad will lead to confusion and inaction. We definitely want
            people to be offsetting their footprint, so long as that the
            messaging is clear: offsetting is not a free pass top continue
            living a polluting life, but it is a valuable tool to balance your
            remaining footprint whilst you make drastic reductions month by
            month.{' '}
          </p>

          <p>
            If all individuals, companies, and governments can start with reduce
            their emissions sharply, and we all increase our funding for these
            projects by offsetting whatever footprints remain, then eventually
            we'll need less and less offsetting to be truly carbon neutral, then
            shortly after be climate positive. We've got to sort this out now,
            so if you wanna sign up for an account with an offset program today,
            then start figuring out where to make the biggest changes in your
            life tomorrow, that's fine. The important thing is to do both, and
            quickly.{' '}
          </p>

          <h2 id="checkforstandards">Check for Standards</h2>

          <p>
            An offsetting organization must clearly display the independent
            auditing or standards it uses, like{' '}
            <a href="https://www.goldstandard.org/">Gold Standard</a>,{' '}
            <a href="https://verra.org/">Verified Carbon Standard</a>,{' '}
            <a href="https://www.green-e.org/programs/climate">
              Green-e® Climate Standard
            </a>
            , or the United Nations{' '}
            <a href="https://offset.climateneutralnow.org/">
              Certified Emission Reductions
            </a>{' '}
            (CERs). Projects that meet the criteria for these standards are
            rigorously audited by external auditors, usually from non-profit
            organizations and charities like the WWF, who make sure the people
            on the ground are indeed planting the trees, installing the solar
            panels, etc.
          </p>

          <p>
            Organizations like <a href="https://offset.earth/">Offset Earth</a>{' '}
            and{' '}
            <a href="https://co2.myclimate.org/en/offset_further_emissions">
              myclimate
            </a>{' '}
            do this homework for you and only pick certified projects, so you
            can be confident your money is getting to the best place.{' '}
          </p>

          <p>
            If an offsetting program does not tell you which standard it's
            using, or uses a "standard" you've never heard of, then be very
            wary, do a load of research on that standard, or avoid it entirely.
            We've done our due diligence on all the{' '}
            <a href="https://protect.earth/tags/offset">offset providers</a>{' '}
            found on our site, so maybe just stick to these ones.
          </p>

          <h2 id="sogoodorbad">So, Good or Bad?</h2>

          <p>
            If you can find an organization you trust that supports a mixture of
            offsetting activities (not just planting trees), and do not use it
            as an excuse to keep living a emission-heavy lifestyle, then offset
            away.
          </p>

          <p>
            I have stopped thinking of offsetting as supporting the status quo,
            and think of it as a means for supporting emission reduction
            programs, funding direct capture technology, supporting
            reforestation and rewilding, then it's covering a whole bunch of the{' '}
            <a href="https://www.drawdown.org/solutions">
              Project Drawdown solutions
            </a>
            , which is filling a huge funding shortfall from governments around
            the world.{' '}
          </p>

          <p>
            To avoid the worst outcomes of the climate crisis we need to plant
            an{' '}
            <a href="https://theconversation.com/reforesting-an-area-the-size-of-the-us-needed-to-help-avert-climate-breakdown-say-researchers-are-they-right-119842">
              area the size of the United States
            </a>
            , so let's not complain about reforestation. All the while the world
            is{' '}
            <a href="https://www.theguardian.com/environment/2019/sep/12/deforestation-world-losing-area-forest-size-of-uk-each-year-report-finds">
              losing forests cover equivalent to the size of the UK every year
            </a>{' '}
            so let's not complain about deforestation protection. Most of us
            could shave a few tonnes of our carbon footprint this year, so let's
            not complain about personal action and footprint reduction
            education.
          </p>
          <p>Just please, please, do both.</p>
          <p>
            For ideas on how to get your carbon footprint under control, check
            out our <a href="/getting-started">Getting Started</a> guide.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
);
