// Obj cards

const obj = [{
  name: 'Miranda Torres',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, eos.',
  image: ['Images/JPEG/Speaker1.jpg'],
  job: 'President of Fashionista America',
},
{
  name: 'Alexa Gomez',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, eos.',
  image: ['Images/JPEG/Speaker2.jpg'],
  job: 'Owner of an Online Boutique Store',
},
{
  name: 'Tesha Summers',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, eos.',
  image: ['Images/JPEG/Speaker3.jpg'],
  job: 'Fashion, Styles and Trend Expert',
},
{
  name: 'Pia Cannavaro',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, eos.',
  image: ['Images/JPEG/Speaker8.jpg'],
  job: 'Top Fashion Model and Teacher',
},
{
  name: 'Monica Gutierrez',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, eos.',
  image: ['Images/JPEG/Speaker5.jpg'],
  job: 'Shoes and Accesories Expert',
},
{
  name: 'Cindy Chow',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, eos.',
  image: ['Images/JPEG/Speaker6.jpg'],
  job: 'Juvenile Fashion and Style Expert',
}];

// Speaker-section cards

const speakerSectionMobile = document.getElementById('Speakers-mobile');

for (let i = 0; i < 2; i += 1) {
  const div = document.createElement('div');
  div.classList.add('col-12');
  div.innerHTML = `
                        <div class="box">
                            <div class="row">
                                <div class="col-5 my-auto"><img class="img-thumbnail bg-img-thumb2" src="${obj[i].image}" alt="Featured-Speaker-${i + 1}"></div>
                                <div class="col-7 my-auto">
                                    <div class="row">
                                        <div class="col-12"><h4 class="speaker-h4">${obj[i].name}</h4></div>
                                        <div class="col-12">
                                            <p class="speaker-p-a">${obj[i].job}</p>
                                            <hr class="hr-speaker-desk">
                                        </div>
                                        <div class="col-12">
                                            <p class="speaker-p-b">${obj[i].description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
  speakerSectionMobile.appendChild(div);
}

const speakerSection = document.getElementById('Speakers-desk');

for (let i = 0; i < obj.length; i += 1) {
  const div = document.createElement('div');
  div.classList.add('col-6');
  div.innerHTML = `
                        <div class="box">
                            <div class="row">
                                <div class="col-5 my-auto">
                                    <img class="img-thumbnail bg-img-thumb2" src="${obj[i].image}" alt="Featured-Speaker-${i + 1}">
                                </div>
                                <div class="col-7 my-auto">
                                    <div class="row">
                                        <div class="col-12"><h4 class="speaker-h4">${obj[i].name}</h4></div>
                                        <div class="col-12">
                                            <p class="speaker-p-a">${obj[i].job}</p>
                                            <hr class="hr-speaker-desk">
                                        </div>
                                        <div class="col-12">
                                            <p class="speaker-p-b">${obj[i].description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
  speakerSection.appendChild(div);
}