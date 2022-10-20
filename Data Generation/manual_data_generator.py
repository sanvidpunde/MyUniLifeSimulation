#!/usr/bin/env python
# coding: utf-8

# In[10]:


pip  install sdv


# In[11]:


from platform import python_version

print(python_version())


# In[49]:


import pandas as pd
import numpy as np
data = pd.read_csv("Final_Dataset.csv")
data.head()


# In[50]:


print(data.shape)
data.isnull().sum()


# In[51]:


data.columns


# In[52]:


import random
for column in ['College Location', 'Course',
       'Course Name ', 'Level', 'Mode of study', 'Award ']:

    data[column].fillna(lambda x: random.choice(data[data[column] != np.nan][column]), inplace =True)
    


# In[53]:


data.isnull().sum()


# In[54]:


data.Level.value_counts()


# In[44]:



from sdv.tabular import GaussianCopula
model = GaussianCopula()
model.fit(data)


# In[45]:


sample = model.sample(1000000)
sample.head()


# In[46]:


sample.shape


# In[48]:


sample.to_csv("UISimulation_dataset.csv")


# In[ ]:




