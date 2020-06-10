# smartfridgedemo

# This project is hosted by the Cloud Innovation School(CIS) of Tunghai University.

Our goal is to improve the object detection system at the back end of the smart refrigerator and to promote it to the market.

The equipment used is Nvidia T4 to build up our AI edge system and embed Google 'Super Sensor ' and the webcam can do the object detection and face recognition simultaneously to give your family members or friends advice of someone who took too much unhealthy food and counts automatically by 'Super Sensor' how many times he/she take this food and how many often he/she opens the fridge.

We would build up our algorithm for the recommendation system and AI edge computing system.

The model we would use of Mask R-CNN(YOLO V3 maybe V2 didn't use too much computing) on Python 3, Keras, and TensorFlow. The model generates bounding boxes and segmentation masks for each instance of an object in the image. It's based on the Yolo V3  backbone.

And our school have a partnership with AWS, so we would upload a lot of dataset to S3 and connect to AWS recognition to make sure we can detect the object in real-time(It was a solution, but not a good choice to protect our customer data), all we have to do just follow "GDPR" rule.

And we wanna build up the dual-edge system in order to prevent any kind of face or personal information would leakage, we know in the near future, data-centric and data-driven would make a huge change of our daily life, and the way we take the food the way we store our supplies to the fridge would be recorded on our smart edge device, but we would devise a cutting-edge way to protect our data in case of them be sent to the cloud-like: AWS, Azure, or any kind of cloud platform, we wanna partition our data, and if Google or Facebook want to access our data have to get our permissions in advance.


Please feel free to contact us s05490026@go.thu.edu.tw
