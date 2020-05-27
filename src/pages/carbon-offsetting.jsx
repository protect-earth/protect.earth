import React from 'react';
import { Layout, SuggestionForm } from '../components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

import imgFootprint from '../images/carbon-offsetting/footprint-example.png';
import imgShell from '../images/carbon-offsetting/shell-greenwash.jpg';
import imgPieChart from '../images/carbon-offsetting/offsetting-operational.png';

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
            Depending on who you talk to, it might be touted as{' '}
            <a href="https://www.economist.com/briefing/2020/05/21/carbon-offsetting-is-essential-to-tackling-climate-change">
              essential
            </a>
            ,{' '}
            <a href="https://theenergymix.com/2019/11/15/surging-market-for-carbon-offsets-raises-spectre-of-greenwashing/">
              greenwashing
            </a>
            ,{' '}
            <a href="https://academicflyingblog.wordpress.com/2020/02/04/we-dont-need-aviation-offsets-institutions-and-individuals-can-own-their-carbon-emissions/">
              fraud
            </a>
            , a distraction which perpetuates the status quo and hampers real
            climate action, or{' '}
            <a href="https://www.yaleclimateconnections.org/2019/05/are-carbon-offsets-a-scam/">
              a complex grey area which involves a lot of "it depends"
            </a>
            . Let's explain why people are so very divided on this topic, in the
            hope of helping you decide if you'll use carbon offsetting or not.
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
            soccer pitches - will take decades to barely scratch the surface of
            their carbon footprint, and definitely not support the continued
            operation of an entire fleet of aircraft. Ryan Air also had an
            advertisement banned over{' '}
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
            putting all of our health and existence at risk?
          </p>

          <p>
            Offsetting cannot make flying sustainable, and airlines suggesting
            so are just trying fix their reputation with the increasingly
            climate-conscious public by passing the cost on to them. Airlines
            might pocket your money by doing literally nothing climate related,
            or they might do next to nothing, but even if they were spending
            100% of the money on legitimate projects there aren't enough in the
            world to support the growing aviation industry. We need to stop
            subsidizing the industry, and add an aviation carbon tax - or at the
            very least a "frequent flier tax". Either approach will raise the
            cost of flying to a more realistic price and in turn provide funding
            for electric trains, to help reduce the amount of flights fairly,
            whilst still empowering people to travel.
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
            offsetting as a cheap pseudo-solution to get better press, petrol
            stations are getting in on the greenwashing too.
          </p>

          <img
            src={imgShell}
            alt="Shell poster promoting an app where you can carbon offset your driving"
            style={{ width: '100%' }}
          />

          <p>
            Just because the polluting industries claim to support offsetting,
            it doesn't mean offsetting is a bad idea. They're generally pushing
            a weak, unprovable, and cheap version of it to greenwash their
            marketing more than anything else. To avoid getting caught out, they
            generally like to push the least provable approaches to offsetting
            too.
          </p>

          <h2 id="morethanjusttrees">More Than Just Trees</h2>

          <p>
            Some organizations offering to offset CO2 will only talk about
            trees, and this is a bit of a problem. For starters, reforestation
            is the most difficult approach to regulate. Survival rate of trees
            varies widely due to weather, pests, diseases, competing grasses,
            pollution, and nutrient imbalances. Care can be taken to protect
            against many of these impacts, but that takes money and expertise,
            so you need a reforestation team that actively cares about the
            outcome, instead of one which is trying to make a bit of money from
            peoples guilt, and you need to be sure they're not going to clear
            cut those trees in 10 years. Protection againsty deforestation is
            also tough to prove. Were those trees definitely going to get cut
            down right now and did this money stop that from happening? How long
            will that protection last and how is it enforced? There are a lot of{' '}
            <a href="https://plantit2020.org/pdf/Scams_Short_Edited.pdf">
              scams in the reforestation/protection space
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
            rabbits, and birds from eating all the seeds. With all of that we'd
            still be 13% short due to existing forest cover which we certainly
            wouldn't want to level and plant fresh...
          </p>

          <p>
            Most developed countries do not have enough forestable land to cover
            the footprints of those living there with their current emission
            levels, so they reforest Madagasgar, Nepal, Kenya, and other
            countries which absolutely need it, but those trees are going to
            take too long to soak up all the emissions we're spitting out now,
            and we need levels to drop substantially by 2030, not 2100.
          </p>

          <p>
            Planting trees <strong>alone</strong> is not going to save the day,
            but we absolutely need to increase{' '}
            <a href="https://ourworldindata.org/forests">
              the woodland cover of all the countries around the world
            </a>{' '}
            because the increase in{' '}
            <a href="https://edition.cnn.com/2019/03/25/health/hurricane-maria-forest-climate/index.html">
              extreme storms are speeding up loss of woodland
            </a>
            , and{' '}
            <a href="https://theconversation.com/we-found-2-c-of-warming-will-push-most-tropical-rainforests-above-their-safe-heat-threshold-139071">
              existing rainforests are going to die off if we hit 2ºC
            </a>
            . The UK currently has ~13% forest cover, and we should quickly aim
            for at least 25% through reforestation and protection, but we also
            need to fund other projects which can have a much bigger short term
            impact on CO2 levels as well. For this reason, legitimate offsetting
            projects will hedge their bets with a two-pronged approach.{' '}
          </p>

          <p>
            For example, <a href="https://offset.earth/">Offset Earth</a> do
            support reforestation projects such as{' '}
            <a href="https://edenprojects.org/">Eden Reforestation</a>, but they
            also support{' '}
            <a href="https://registry.goldstandard.org/projects">
              Gold Standard
            </a>{' '}
            certified projects like these:
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
            Directly capturing carbon dioxide from the air is another
            interesting approach which seems to be slowly improving over time,
            with
            <a href="https://climeworks.shop/">Climeworks</a> offering a monthly
            subscription to back their project. This subscription is about €50 a
            month to remove 0.6 tonnes from the environment, which over the year
            could wipe out 7.2 tonnes for the price of €800. Are you willing to
            pay €800 a month to offset only most of your footprint?
          </p>

          <p>
            Sending money to projects like this is reducing and trapping
            emissions around the world. Hopefully, if these projects scale
            enough, then we'll see emissions drop. Unfortunately, most people
            cannot afford to offset the amount they actually produce because we
            all produce too much CO2e, and offsetting it fully, and legitimately
            is expensive.
          </p>

          <h2 id="reducingvsoffsetting">Reducing vs Offsetting</h2>

          <p>
            We agree with the biggest of the problems folks have with
            offsetting: companies (usually the greenwashers) pretend that we can
            just pay a little money, continue driving, continue flying, and
            continue eating an overly meat-rich diet, and that's just not true
            at all.
          </p>

          <p>
            There's only so many rocket stoves, wind farms, and biodigesters we
            can give to folks before those sources of CO2e avoidance are tapped
            out, at which point we have to look for other sources of carbon
            emissions: flying, driving, and what we eat. There's no point in
            delaying this step, we need to start avoiding these emissions
            immediately.
          </p>

          <p>
            To avoid the worst effects of climate change, we all need to get our
            individual carbon footprints down to{' '}
            <a href="https://www.tmrow.com/climatechange#objective--2-tons-co2eq-per-human-per-year-by-2050">
              5 tonnes a year by 2030
            </a>
            , then 2 tonnes a year by 2050. Whilst the previous examples of
            United Kingdom (10 tCO2e per person per year) and United States (20
            tCO2e per person per year) highlight some of the highest individual
            emissions, the{' '}
            <a href="https://www.independent.co.uk/environment/british-carbon-footprint-africa-emissions-oxfam-climate-change-a9271861.html">
              18 lowest emitting countries were in Africa, including Nigeria,
              Kenya and Zimbabwe
            </a>
            , all coming in under 1 tCO2e per person per year! It's worth
            thinking about this difference a little, and asking: how many people
            are going to need to send money to charities to plant trees in these
            countries who are already living low carbon lifestyles, when I
            continue to live 5-15 tonnes over the top of the UN recommendations?
          </p>

          <p>
            Reducing your own emissions has a far more noticeable and direct
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
            and an average plant-based vegan diet is 43% lower at ~1.3 tCO2e. If
            you switch from meat-based diet to veganism then that's a huge,
            important step towards a 5 tCO2 footprint, but there is still 1.3
            tCO2e that could be offset.
          </p>

          <p>
            Everything we do has an emissions cost: even buying a bicycle and
            getting it delivered causes CO2 emissions, but those emissions are
            far lower than driving to work, and definitely lower than buying a
            new car. Buying a brand new{' '}
            <a href="https://www.apple.com/environment/pdf/products/notebooks/16-inch_MacBookPro_PER_Nov2019.pdf">
              Apple laptop is ~0.4 tCO2e
            </a>{' '}
            , which is equivalent of a flight from London to Athens. It can be
            tough figuring this all out, so grab a{' '}
            <a href="/footprint-calculators/">carbon footprint tracker</a> to
            learn more, then actively seek the reduction of that number each
            month, within the UN recommended deadlines or before.
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
            people to be offsetting their footprint, so long as the messaging is
            clear: offsetting is not a free pass to continue living a polluting
            lifestyle, but it is a valuable tool to balance your remaining
            footprint whilst you make drastic reductions month by month.{' '}
          </p>

          <p>
            If all individuals, companies, and governments can start with
            tracking and reducing their emissions sharply, and we all increase
            our funding for these projects by offsetting whatever footprints
            remain, then eventually we'll need less and less offsetting to be
            truly carbon neutral, then shortly after be climate positive. We've
            got to sort this out now, so if you wanna sign up for an account
            with an offset program today, then start figuring out where to make
            the biggest changes in your life tomorrow, that's fine. The
            important thing is to do both, and quickly.{' '}
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
            If an offsetting program does not tell you which standard it's
            using, or uses a "standard" you've never heard of, then be very
            wary, do a load of research on that standard, or avoid it entirely.
            We've done our due diligence on all the{' '}
            <a href="https://protect.earth/tags/offset">offset providers</a>{' '}
            found on our site, so maybe just stick to these ones.
          </p>

          <p>
            Organizations like <a href="https://offset.earth/">Offset Earth</a>{' '}
            and{' '}
            <a href="https://co2.myclimate.org/en/offset_further_emissions">
              myclimate
            </a>{' '}
            do their homework for you, and only pick certified projects. The
            next thing to check for is clarity around finances and operational
            costs. Of course, an organization putting this on their website
            doesn't immediately make it true, but <em>not</em> not being clear
            about costs is a sure sign of a scam.
          </p>

          <img
            src={imgPieChart}
            alt="Offset.Earth advertise their split as 87.5% to offsetting and tree planting, and 12.5% to operational costs"
            style={{ width: '100%' }}
          />

          <p>
            Seeing an offsetting company keep 12-17% for operational costs and
            marketing is pretty common, and not just reasonable, but quite
            beneficial. Instead of using Offset Earth you could do the homework
            yourself, but providing these subscription-based services with more
            marketing budget expands the user-base too, which will get more
            subscribers donating every month. This network effect will make your
            payments go much farther at reducing CO2 emissions.{' '}
          </p>

          <h2 id="sogoodorbad">So, Good or Bad?</h2>

          <p>
            If you can find an organization you trust that supports a mixture of
            offsetting activities (not just planting trees), and do not use it
            as an excuse to keep living a emission-heavy lifestyle, then offset
            away.
          </p>

          <p>
            It helps to stop thinking of offsetting as supporting the status
            quo, and start thinking of it as a means for supporting emission
            reduction programs, funding direct capture technology, supporting
            reforestation and rewilding, then it's covering a whole bunch of the{' '}
            <a href="https://www.drawdown.org/solutions">
              Project Drawdown solutions
            </a>
            , which is filling a huge funding shortfall from governments around
            the world. Education around high emission lifestyles is another
            problem that needs solving, but we can solve that whilst we also
            fund these programs.
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
            so let's not complain about deforestation prevention. Most of us
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
