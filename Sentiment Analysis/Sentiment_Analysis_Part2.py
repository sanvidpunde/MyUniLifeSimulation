
import pandas as pd
import numpy as np
import os, sys
from sklearn.linear_model import LogisticRegression
from sklearn import svm
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier
from copy import deepcopy

src_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir))
sys.path.append(src_dir)
os.chdir(src_dir)


from src.data_preprocessing import data_cleaning
from src.data_analysis import data_analysis
from src.data_visualization import data_visualization
from src.commons import common_func as cfnc
from src.models import modeling, hyperparametertuning



if __name__ == "__main__":
    # todo 1. Data extraction
    # todo 2. Data conversion
    # todo 3. Data cleaning
    # todo 4. Data Preprocessing
    # todo 5. Data Analysis
    # todo 6. Feature Engineering
    # todo 7. Data Modeling
    # todo 8. Hyperparameter Tuning
    # todo 9. Model Analysis

   
    
    filedir = 'data/'

    # For now im testing on amazon review dataset to test my theory
    os.chdir(src_dir)
    csv_file_list = ['amazon_reviews_us_Books_v1_02_sample.csv']
    for file in csv_file_list:
       
        dfNew = pd.read_csv('dfNew.csv')

        
        dfNew = pd.read_csv('dfNew_final.csv')

        # todo random split train and test data
        index = dfNew.index
        dfNew['random_number'] = np.random.randn(len(index))
        train = dfNew[dfNew['random_number'] <= 0.8]
        test = dfNew[dfNew['random_number'] > 0.8]


        #todo create bag of words
        # train_matrix, test_matrix, vectorizer = cfnc.create_bag_of_words(train,test,'review_headline_prep')
        # train_matrix, test_matrix, vectorizer = cfnc.create_bag_of_words_tf(train, test, 'review_headline_prep')
        train_matrix, test_matrix,vectorizer = cfnc.create_bag_of_words_tfidf(train, test, 'review_headline_prep')
        data_visualization.plot_vectorizer(train_matrix, vectorizer,vector_number=0)

        X_train = train_matrix
        X_test = test_matrix # y_pred
        y_train = train['sentiment_target']
        y_test = test['sentiment_target']

        # TODO Logistic Regression
        lr_model = LogisticRegression()
        lr_model = modeling.model_fit(X_train,y_train, model=lr_model)
        y_pred = lr_model.predict(X_test)
        modeling.model_analysis(y_pred,y_test,'Logistic_Regression')
        data_visualization.plot_confusion_matrixes(lr_model,X_test,y_test,'LR')
        data_visualization.plot_classification_report(lr_model, X_train, y_train, X_test, y_test, 'LR',
                                   classes=['Negative', 'Positive'])
        hyperparametertuning.hyperparameter_tuning(LogisticRegression(), 'lr',X_train, y_train)

        # TODO KNN
        knn_model = KNeighborsClassifier(n_neighbors=3)
        knn_model = modeling.model_fit(X_train,y_train, model=knn_model)
        y_pred = knn_model.predict(X_test)
        modeling.model_analysis(y_pred,y_test,'KNN')
        data_visualization.plot_confusion_matrixes(knn_model, X_test, y_test, 'KNN')
        data_visualization.plot_classification_report(knn_model, X_train, y_train, X_test, y_test, 'KNN',
                                   classes=['Negative', 'Positive'])
        hyperparametertuning.hyperparameter_tuning(KNeighborsClassifier(n_neighbors=3), 'knn', X_train, y_train)

    

        # TODO Random Forest
        rf_model = RandomForestClassifier(bootstrap=True, class_weight=None, criterion='gini',
            max_depth=100, max_features=1000, max_leaf_nodes=None,
            min_impurity_decrease=0.0, min_impurity_split=None,
            min_samples_leaf=3, min_samples_split=10,
            min_weight_fraction_leaf=0.0, n_estimators=10, n_jobs=1,
            oob_score=False, random_state=None, verbose=0,
            warm_start=False)
        rf_model = modeling.model_fit(X_train,y_train, model=rf_model)
        y_pred = rf_model.predict(X_test)
        modeling.model_analysis(y_pred,y_test,'Random_Forest')
        data_visualization.plot_confusion_matrixes(rf_model, X_test, y_test, 'Random_Forest')
        data_visualization.plot_classification_report(rf_model, X_train, y_train, X_test, y_test, 'Random_Forest',
                                   classes=['Negative', 'Positive'])
        hyperparametertuning.hyperparameter_tuning(
            RandomForestClassifier(bootstrap=True, class_weight=None, criterion='gini',
                                   max_depth=100, max_features=1000, max_leaf_nodes=None,
                                   min_impurity_decrease=0.0, min_impurity_split=None,
                                   min_samples_leaf=3, min_samples_split=10,
                                   min_weight_fraction_leaf=0.0, n_estimators=10, n_jobs=1,
                                   oob_score=False, random_state=None, verbose=0,
                                   warm_start=False), 'random_forest', X_train, y_train)
        # TODO SVM
        print('SVM')
        svm_model = svm.SVC()
        svm_model = modeling.model_fit(X_train, y_train, model=svm_model)
        y_pred = svm_model.predict(X_test)
        modeling.model_analysis(y_pred, y_test, 'SVM')
        data_visualization.plot_confusion_matrixes(svm_model, X_test, y_test, 'SVM')
        data_visualization.plot_classification_report(svm_model, X_train, y_train, X_test, y_test, 'SVM',
                                                      classes=['Negative', 'Positive'])
        hyperparametertuning.hyperparameter_tuning(svm.SVC(), 'svc', X_train, y_train)
        # del data


    print("__main__")

